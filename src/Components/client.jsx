// Constants for API URLs
export const contactURL = "https://boolean-api-server.fly.dev/loza01/contact";
export const postURL = "https://boolean-api-server.fly.dev/loza01/post";

// Function to make a POST request to a specified URL with JSON data
export const post = (url, data) => {
    // Options for the fetch request
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    // Return the fetch promise
    return fetch(url, options);
};

// Function to make a GET request to a specified URL and parse the JSON response
export const get = (url) => {
    // Return the fetch promise, parsing the response as JSON
    return fetch(url)
        .then((res) => res.json());
};

// Function to make a DELETE request to a specified URL and parse the JSON response
export const remove = (url) => {
    // Options for the fetch request
    const options = {
        method: 'DELETE',
    };

    // Return the fetch promise, parsing the response as JSON
    return fetch(url, options)
        .then((res) => res.json());
};

// Function to determine the profile color based on the provided ID
export const profileColour = (id) => {
    let className = "";

    // Logic to determine the profile color based on the ID
    if (id < 5 && id % 2 === 1) {
        className = "profileGreen";
    } else if (id < 5 && id % 2 === 0) {
        className = "profileBlue";
    } else if (id > 5 && id % 2 === 1) {
        className = "profileYellow";
    } else if (id > 5 && id % 2 === 0) {
        className = "profileRed";
    } else {
        className = "profilePurple";
    }

    return className;
};
