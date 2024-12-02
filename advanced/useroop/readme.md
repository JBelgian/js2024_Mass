Let's break down this final api powered authentication example script

# Authentication System Explanation

## 1. Overview
This script creates a basic user authentication system that handles:
- User registration
- User login
- Session management
- Form toggling between login and register

## 2. The Auth Class Structure

### Class Setup
```javascript
class Auth {
    #users;        // Private array to store users
    #salt;         // Private string used for password security
    #apiUrl;       // Private URL for the user API
}
```
The `#` symbol means these variables are private - they can only be accessed inside the class.

### Constructor
```javascript
constructor() {
    this.#apiUrl = 'http://localhost:3000/users';
    this.#salt = "santasWorkshop2024";
    this.#users = [];
    this.#fetchUsers();
}
```
When the Auth class is created:
1. Sets the API URL
2. Sets a salt (a secret string for password security)
3. Creates an empty users array
4. Fetches existing users from the server

## 3. Core Functions

### Registration Process
1. Gets email and password from the registration form
2. Validates the email format (regex aka regululiere expressies)
3. Checks if email already exists
4. Hashes the password for security
5. Sends the new user data to the server
6. Updates the local users array
7. Shows success message and switches to login form

### Login Process
1. Gets email and password from the login form
2. Hashes the password
3. Checks credentials against server data
4. If successful:
   - Sets session data
   - Redirects to secure page
5. If unsuccessful:
   - Shows error message

### Password Security
The script uses a simple hashing function:
```javascript
#hashPassword(password) {
    let hash = 5381;
    const fullString = password + this.#salt;
    
    for (let i = 0; i < fullString.length; i++) {
        hash = ((hash << 5) + hash) + fullString.charCodeAt(i);
    }
    
    return hash.toString();
}
```
This converts the password into a secure string that can't be reversed.

## 4. Helper Functions

### Email Validation
```javascript
#isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```
Checks if an email address is properly formatted (e.g., user@domain.com)

### Form Toggle
```javascript
toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}
```
Switches between login and registration forms

## 5. Static Methods
These can be used without creating an instance of the Auth class:

### Authentication Check
```javascript
static checkAuth() {
    if (!sessionStorage.getItem('loggedIn')) {
        alert('Please login first!');
        window.location.href = 'index.html';
    }
}
```
Checks if user is logged in, redirects to login if not

### Logout
```javascript
static logout() {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}
```
Clears session data and redirects to login page

## 6. Script Initialization
```javascript
const auth = new Auth();

// Add event listeners to forms
document.getElementById('loginForm')?.addEventListener('submit', (e) => auth.login(e));
document.getElementById('registerForm')?.addEventListener('submit', (e) => auth.register(e));
```
1. Creates a new instance of the Auth class
2. Sets up event listeners for form submissions
3. Sets up event listeners for form toggling

## Important Notes:
1. This is a basic implementation for learning purposes
2. In real applications:
   - Password hashing should be more secure
   - Authentication should be handled server-side
   - Additional security measures would be needed
3. The code uses modern JavaScript features like:
   - Private class fields (#)
   - Optional chaining (?.)
   - Async/await for API calls
   
   Emoji's spice up the code and markdown! 😊

## Extra notes:

Why Use this vs const?	
    - Use this when you need to persist data across different method calls or store data at the class instance level.
    - Use const for temporary, disposable data within a method where immutability and scope-limitation are beneficial.

If your method interacts with operations that take time to complete, such as:
    - API requests (using fetch, axios, etc.)
    - Database queries or file I/O
    - Timers (setTimeout, setInterval)
    - Reading from external sources like web services or local files

Only if our methods serve the above purpose, only then use Async await methods...