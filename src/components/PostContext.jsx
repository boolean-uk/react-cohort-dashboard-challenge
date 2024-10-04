/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        fetch("https://boolean-uk-api-server.fly.dev/KajaPlaszko/post")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data); 
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []); 

    const addPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]); 
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};
