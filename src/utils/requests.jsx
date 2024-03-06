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
