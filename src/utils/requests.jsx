export const getPosts = async () => {
    try {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/olemarkusroland/post"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

export const postPost = async (post, setPosts) => {
    try {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/olemarkusroland/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Set content type header
                },
                body: JSON.stringify(post)
        })
        if (!response) {
            throw new Error("Failed to post")
        }
        
        const newPost = await response.json();
        setPosts(prevPosts => [newPost, ...prevPosts]);
        console.log("Post created successfully:", newPost);
    } catch (error) {
        console.error("Error creating post: ", error)
    }
}