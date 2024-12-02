/**
 * Auth class handles user authentication including registration, login, and session management.
 * Note: This is a basic implementation - in production, authentication should be handled server-side
 * with proper security measures (like bcrypt for password hashing, JWT tokens, etc.)
 * @param is part of the JSDoc comment https://jsdoc.app
 */
class Auth {
    // Private class fields
    #users;
    #salt;
    #apiUrl;
    
    /**
     * Initialize the Auth class
     * Sets up initial state and fetches existing users
     */
    constructor() {
        this.#apiUrl = 'http://localhost:3000/users';
        this.#salt = "santasWorkshop2024"; // In production, salt should be server-side
        this.#users = []; // Initialize as empty array
        this.#fetchUsers(); // Load existing users when class is instantiated
    }

    /**
     * Fetch existing users from the API
     * Stores them in the private users array
     */
    async #fetchUsers() {
        try {
            const response = await fetch(this.#apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            this.#users = await response.json();
            console.log(this.#users);
        } catch (error) {
            console.error('Error fetching users:', error);
            this.#users = []; // Reset to empty array on error
        }
    }

    /**
     * Hash password using djb2 algorithm with salt
     * Note: In production, use a proper cryptographic hash function
     * @param {string} password - The password to hash
     * @returns {string} The hashed password
     */
    #hashPassword(password) {
        let hash = 5381;
        const fullString = password + this.#salt; // Combine password with salt

        for (let i = 0; i < fullString.length; i++) {
            hash = ((hash << 5) + hash) + fullString.charCodeAt(i);
        }

        return hash.toString();
    }

    /**
     * Handle user registration
     * @param {Event} event - Form submission no default submit
     */
    async register(event) {
        event.preventDefault();

        // Get form values
        const email = document.getElementById('registerEmail').value.toLowerCase();
        const password = document.getElementById('registerPassword').value;

        // Validate email format
        if (!this.#isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Check if email already exists
        if (this.#users.some(user => user.email === email)) {
            alert('Email already registered!');
            return;
        }

        // Hash password and prepare user data
        const hashedPassword = this.#hashPassword(password);
        const newUser = {
            email: email,
            password: hashedPassword
        };
        
        try {
            // Attempt to register user with API
            const response = await fetch(this.#apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            // Update local users array and show success message
            this.#users.push(newUser);
            alert('Registration successful!');
            this.toggleForms(); // Switch to login form

        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.');
        }
    }

    /**
     * Handle user login
     * @param {Event} event - Form submission no default submit
     */
    async login(event) {
        event.preventDefault();

        // Get form values
        const email = document.getElementById('loginEmail').value.toLowerCase();
        const password = document.getElementById('loginPassword').value;
        
        // Hash password for comparison
        const hashedPassword = this.#hashPassword(password);
        
        try {
            // Fetch fresh user data from server
            const response = await fetch(this.#apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const users = await response.json();
            
            // Find matching user
            const user = users.find(u => 
                u.email === email && 
                u.password === hashedPassword
            );
            
            if (user) {
                // Set session data
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('userEmail', email);
                
                // Redirect to secure page (real world = routes)
                window.location.href = 'secure.html';
            } else {
                alert('Invalid email or password!');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please try again.');
        }
    }

    /**
     * Toggle between login and registration forms
     */
    toggleForms() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        
        // Toggle visibility
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    }

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} True if email is valid
     */
    #isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Check if user is authenticated
     * Redirects to login page if not authenticated
     */
    static checkAuth() {
        if (!sessionStorage.getItem('loggedIn')) {
            alert('Please login first!');
            window.location.href = 'index.html';
        }
    }

    /**
     * Handle user logout
     * Clears session storage and redirects to login page
     */
    static logout() {
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    }
}

// Create instance of Auth class
const auth = new Auth();

// Add form submit event listeners
document.getElementById('loginForm')?.addEventListener('submit', (e) => auth.login(e));
document.getElementById('registerForm')?.addEventListener('submit', (e) => auth.register(e));

// Add toggle form event listeners if elements exist
document.getElementById('showLogin')?.addEventListener('click', () => auth.toggleForms());
document.getElementById('showRegister')?.addEventListener('click', () => auth.toggleForms());