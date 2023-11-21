export const contactURL = "https://boolean-api-server.fly.dev/PeachyOmnivore/contact"
export const postURL = "https://boolean-api-server.fly.dev/PeachyOmnivore/post"




export const post = (url, data) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return fetch(url, options)
}



export const get = (url) => {
    return fetch(url)
        .then((res) => res.json())
}

export const remove = (url) => {

    const options = {
        method: 'DELETE',
    }

    return fetch(url, options)
        .then((res) => res.json())
}

export const profileColour = (id) => {
    let className = ""
    if (id < 5 && id % 2 === 1) {
        className = "profileGreen"
    } else if (id < 5 && id % 2 === 0) {
        className = "profileBlue"
    } else if (id > 5 && id % 2=== 1) {
        className = "profileYellow"
    } else if (id > 5 && id % 2 === 0) {
        className = "profileRed"
    } else {
        className = "profilePurple"
    } return className
}