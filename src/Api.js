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

const getPosts = () => {
    console.log("Get posts...")
    return fetch('https://boolean-api-server.fly.dev/Annemoon-de-Groen/post', {}).then((response) => {
        return response.json();
    })

}

const getPostById = (id) => {
    return fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${id}`, {})
        .then((response) => { return response.json() })
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
    return fetch(URL, postRequestOptions).then((response) => {
        return response.json();
    })
}

function postPost(title, content, contactId) {
    const data = {
        title: title,
        content: content,
        contactId: contactId
    }
    const URL = `https://boolean-api-server.fly.dev/Annemoon-de-Groen/post`
    const postRequestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(URL, postRequestOptions).then((response) => {
        return response.json();
    })
}

function updateUser(userId, data) {
    const postRequestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/contact/${userId}`, postRequestOptions)
        .then((response) => { return response.json() })
}

function updatePost(postId, data) {
    const postRequestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${postId}`, postRequestOptions)
        .then((response) => { return response.json() })
}

function updateComment(comment) {
    console.log('Update Comment')
    const postRequestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    }
    fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${comment.postId}/comment/${comment.id}`, postRequestOptions)
        .then((response) => { return response.json() })
}



function deletePost(postId) {
    const requestOptions = {
        method: "DELETE",
    }

    fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${postId}`, requestOptions)
}

function deleteComment(postId, commentId) {
    const requestOptions = {
        method: "DELETE"
    }
    console.log("Delete comment with id:", commentId, "from post:", postId)
    fetch(`https://boolean-api-server.fly.dev/Annemoon-de-Groen/post/${postId}/comment/${commentId}`, requestOptions)

}


export {
    getAuthor,
    getComments,
    getPosts,
    postComment,
    postPost,
    getPostById,
    updateUser,
    updatePost,
    updateComment,
    deletePost,
    deleteComment
}