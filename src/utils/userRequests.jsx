// userRequests.jsx
export const getUser = async (id) => {
    try {
        const response = await fetch(
            `https://boolean-api-server.fly.dev/olemarkusroland/contact/${id}`
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch user with id ${id}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user: ", error)
    }
};