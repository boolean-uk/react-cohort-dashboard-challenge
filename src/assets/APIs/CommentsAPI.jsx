


export async function GetAllComments (username, postId) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post/${postId}/comment`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        })

        if (!response.ok) {
            throw new Error("Error in getAllComments response: " + response.status)
        } 
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error("Error while fetching comments", error)
    }
}

export async function CreateNewComment(username, postId, newComment) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post/${postId}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        });

        if (!response.ok) {
            throw new Error("Error in creating COMMENT for a post response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while creating a comment for a Post!" + error);
    }
}