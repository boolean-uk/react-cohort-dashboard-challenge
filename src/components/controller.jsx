export const get = (api) => {
    return fetch(api)
        .then((res) => res.json())
}