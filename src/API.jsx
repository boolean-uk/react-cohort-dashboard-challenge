// This file is taken from my implementation from the exercise "react-address-book-part-2"
const baseURL = "https://boolean-uk-api-server.fly.dev/"
const githubUsername = "maaxolofsson/"

export async function get(endpoint) {
    const httpRes = await fetch(baseURL + githubUsername + endpoint);
    const data = await httpRes.json();
    return { httpRes, data }
}

export async function deleteOne(endpoint) { // Endpoint should include ID, e.g. /contact/10
    const c = {
        method: 'DELETE'
    }
    console.log(baseURL + githubUsername + endpoint)
    const httpRes = await fetch(baseURL + githubUsername + endpoint, c);
    const data = await httpRes.json();
    return { httpRes, data }
}

export async function post(endpoint, data) { // data = obj (json)
    const c = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const httpRes = await fetch(baseURL + githubUsername + endpoint, c)
    const resData = await httpRes.json()
    return { httpRes, resData };
}

export async function put(endpoint, newData) { // data = obj (json)
    const c = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }
    const httpRes = await fetch(baseURL + githubUsername + endpoint, c);
    const resData = await httpRes.json()
    return { httpRes, resData };
}