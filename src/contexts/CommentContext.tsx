import React, { createContext, useState, useContext, useEffect } from "react";
import { PostComment } from "../types/types";


interface CommentContextType {
    comments: PostComment[];
    setComments: React.Dispatch<React.SetStateAction<PostComment[]>>;
    createComment: (content: string, postId: number) => void;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const CommentProvider: React.FC<{ children: React.ReactNode}> = ({ children}) => {
    const [comments, setComments] = useState<PostComment[]>([]);

    const createComment = async (content: string, postId: number) => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/post/${postId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });
    }

    return (
        <CommentContext.Provider value={{ comments, setComments, createComment }}>
            { children }
        </CommentContext.Provider>
    )
}

export const useComments = () => {
    const context = useContext(CommentContext);
    if (context === undefined) {
        throw new Error('useComments must be used within a CommentProvider');
    }
    return context;
}


