import React, { createContext, useState, useContext, useEffect} from "react";
import { PostType } from "../types/types";

interface PostContextType {
    posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
    createPost: (title: string, content: string, contactId: number) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Stian96/post`);
            if (response.ok) {
                const data = await response.json() as PostType[];
                setPosts(data);
            }
        }
        fetchPosts();
    }, []);

    const createPost = async (title: string, content: string, contactId: number) => {
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, contactId }),
        });

        if (!response.ok) {
            throw new Error(`Respons ikke ok, status: ${response.status}`);
        }

        const newPost = await response.json();
        setPosts((prevPosts) => [newPost, ...prevPosts]);

        return newPost;
    } 
    catch (error) {
            console.error('Feil ved opprettelse av post:', error);
            throw error;
        }
    }   

    return (
        <PostContext.Provider value={{ posts, setPosts, createPost}}>
            { children}
        </PostContext.Provider>
    );
}

export const usePosts = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('Post hook must be used within a PostProvider');
    }
    return context;
}
