// commentRequests.jsx
export const getComments = async (postId) => {
    try {
        const response = await fetch(
            `https://boolean-api-server.fly.dev/olemarkusroland/post/${postId}/comment`
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch comments from post with id ${postId}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching comments: ", error)
    }
};

export const postComment = async (postId, comment, setComments) => {
    try {
        const response = await fetch(
            `https://boolean-api-server.fly.dev/olemarkusroland/post/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Set content type header
                },
                body: JSON.stringify(comment)
        })
        if (!response) {
            throw new Error("Failed to post comment")
        }
        
        const newPost = await response.json();
        setComments(prevComments => [...prevComments, newPost]);
    } catch (error) {
        console.error("Error posting comment: ", error)
    }
}