export const get = (api) => {
    return fetch(api)
        .then((res) => res.json())
}

export const post = (api, data) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return fetch(api, options)
}