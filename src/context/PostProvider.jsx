import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

const getAllPostsUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/post';

const getPostByIdUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/post'

// Lets go with a named export. Maybe not export default this time? Why would I want to import it later and give it a new name. Might just as well stick to this named export.
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);

    const getPosts = async () => {
        const response = await fetch(getAllPostsUrl);
        const jsonData = await response.json();
        setPosts(jsonData);
    };

    const getPostById = async (postId) => {
        const response = await fetch(`${getPostByIdUrl}/${postId}`);
        const jsonData = await response.json();
        setPost(jsonData); 
        //OOOMG Remind me to NEVER use so similar names again... lost 45 minutes wondering why it didnt work as expected.. used setPostssssss with an S on both functions.....
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <PostContext.Provider value={{ posts, getPosts, post, getPostById }}>
            {children}
        </PostContext.Provider>
    )
}

    export const usePosts = () => {
        return useContext(PostContext);
    }