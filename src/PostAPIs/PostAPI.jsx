export async function CreateNewPost(newPost, username) {
    try {

        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost),
        });

        if (!response.ok) {
            throw new Error("Error in create post response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while creating a new Post!" + error);
    }
}

export async function GetPosts(username) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error in Get posts response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while getting all Post!" + error);
    }
}

export async function GetPostComments(username, postId) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post/${postId}/comment`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error in Get COMMENTS for a post response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while getting all comments for a Post!" + error);
    }
}

export async function CreatePostComment(username, postId, newComment) {
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

export async function DeleteComment(username, postId) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post/${postId}/comment`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error in deleting COMMENT for a post response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while deleting a comment for a Post!" + error);
    }
}


export async function GetPostById(username, postId) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error in Get post by id response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while getting a Post by id!" + error);
    }
}

export async function DeletePost(username, postId) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error in Get post by id response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while getting a Post by id!" + error);
    }
}



// Contact APIs for the author
export async function GetContactById(username, contactId) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${contactId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        // console.log(newContact);

        if (!response.ok) {
            throw new Error("Error in Get contact by id response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while getting a contact by id! " + error);
    }
}

export async function GetAllContacts(username) {
    try {

        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error("Error in getAllContacts response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;


    } catch (error) {
        throw new Error("Error while fetching all contacts " + error);
    }
}

export async function UpdateAContact(username, id, newInfo) {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInfo),
        });
        // console.log(newInfo);

        if (!response.ok) {
            throw new Error("Error in PUT contact response: " + response.status);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw new Error("Error while updating a contact! " + error);
    }
}