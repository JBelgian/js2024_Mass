async function fetchUserData() {
    try {
        // Wait for the fetch Promise to resolve
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Wait for the JSON Promise to resolve
        let user = await response.json();
        
        // Log the user data
        console.log('User:', user);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error);
    }
}

// fetchUserData();


async function example() {
    console.log("Before delay");

    setTimeout(() => {
        console.log("After 2 seconds");
    }, 2000);

    console.log("After setTimeout, but before delay completes");
}
example();


// This code snippet defines an asynchronous function called fetchUserData. It makes an HTTP request to the URL 'https://jsonplaceholder.typicode.com/users/1' using the fetch function. The response from the request is stored in the response variable.

// If the response is not successful (i.e., the ok property of the response object is false), an error is thrown.

// If the response is successful, the code proceeds to parse the response body as JSON using the response.json() method. The parsed JSON is stored in the user variable.

// If any errors occur during the fetch or parsing, they are caught in the catch block and logged to the console.

// The code snippet also logs messages to the console at different stages of the fetch and parsing process, indicating the progress of the function.

async function fetchUserData() {
    try {
        console.log('Starting fetch...');
        
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        console.log('Fetch completed:', response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        console.log('Starting JSON parsing...');
        let user = await response.json();
        console.log('JSON parsing completed:', user);
        
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchUserData();

console.log('This runs immediately, before fetch completes');