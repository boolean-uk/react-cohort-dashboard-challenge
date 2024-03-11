
const addCommentOnPost = async (body, postId) => {
    console.log(body)
    return await fetch(`https://boolean-api-server.fly.dev/santhia97/post/${postId}/comment`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type":"application/json",
        },
      })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return data
      })
      .catch((error) => console.error('Error adding comment:', error));
}

const addContentToDb = async (body) => {
    return await fetch(`https://boolean-api-server.fly.dev/santhia97/post`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type":"application/json",
        },
      })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        return data
      })
      .catch((error) => console.error('Error adding comment:', error));
}

export { addCommentOnPost, addContentToDb }



