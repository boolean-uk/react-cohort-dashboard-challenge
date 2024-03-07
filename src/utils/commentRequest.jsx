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