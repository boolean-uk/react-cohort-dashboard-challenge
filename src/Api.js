const URL = 'https://boolean-api-server.fly.dev/Annemoon-de-Groen/post'

const getAuthor = (id) => {
    return fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/contact/${id}`,
        {}).then((response) => {
            return response.json();
        }).then((jsonData) => {
            return jsonData
        })
}

const getComments = (id) => {
    return fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${id}/comment`,
        {}).then((response) => {
            return response.json();
        }).then((jsonData) => {
            return jsonData
        })
}

function postComment(postId, comment, authorId) {
    const data = {
        postId: postId,
        content: comment,
        contactId: authorId
    }
    const URL = `https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${postId}/comment`
    const postRequestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL, postRequestOptions).then((response) => {
        return response.json();
    })
}

export { getAuthor, getComments, postComment }