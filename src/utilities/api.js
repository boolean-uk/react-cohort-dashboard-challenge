import axios from "axios";

const INSTANCE = axios.create({
    baseURL: "https://boolean-api-server.fly.dev/nazartymiv/",
});

// CONTACTS

export async function getContact(contactId) {
    const url = `/contact/${contactId}`;

    try {
        const response = await INSTANCE.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function changeContactData(contactId, contactData) {
    try {
        const response = await INSTANCE.put(
            `/contact/${contactId}`,
            contactData
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// POSTS

export async function getAllPosts() {
    try {
        const response = await INSTANCE.get("/post");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getPostById(postId) {
    try {
        const response = await INSTANCE.get(`/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function createNewPost(postData) {
    try {
        const response = await INSTANCE.post("/post", postData);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function changePostData(postId, postData) {
    try {
        const response = await INSTANCE.put(`/post/${postId}`, postData);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deletePost(postId) {
    try {
        const response = await INSTANCE.delete(`/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// COMMENTS

export async function getComments(postId) {
    const url = `/post/${postId}/comment`;

    try {
        const response = await INSTANCE.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function createNewComment(postId, commentData) {
    try {
        const response = await INSTANCE.post(
            `/post/${postId}/comment`,
            commentData
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function changeCommentData(postId, commentId, commentData) {
    try {
        const response = await INSTANCE.put(
            `/post/${postId}/comment/${commentId}`,
            commentData
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteComment(postId, commentId) {
    try {
        const response = await INSTANCE.delete(
            `/post/${postId}/comment/${commentId}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
