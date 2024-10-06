import React, { useEffect, useState } from "react";
import Avatar from "../user/Avatar";
import { PostComment, UserType } from "../../types/types";
import CommentForm from "./CommentForm";
import { useUser } from "../../contexts/UserContext";

import "../../styling/comment.css";

interface CommentProps {
    postId: number;
}

const Comment = ({ postId }: CommentProps) => {
    const { user } = useUser();
    const [postComments, setPostComments] = useState<PostComment[]>([]);
    const [commentUsers, setCommentUsers] = useState<UserType[]>([]);
    const [showAllComments, setShowAllComments] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/post/${postId}/comment`);
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const data = await response.json();
            setPostComments(data);

            // Get the user information about each comment.
            data.forEach(async (comment: PostComment) => {
                await fetchCommentUsers(comment.contactId);
            })
        }
        fetchData();
    }, [postId]);

    const fetchCommentUsers = async (id: number) => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/contact/${id}`);
        if (response.ok) {
            const data = await response.json() as UserType;
            setCommentUsers((prevUsers) => [...prevUsers, data]);
        }
    }

    const getCommentUserName = (commentUsers: UserType[], comment: PostComment): string => {
        const firstName = commentUsers.find((user: UserType) => user.id === comment.contactId)?.firstName;
        const lastName = commentUsers.find((user: UserType) => user.id === comment.contactId)?.lastName;
        return `${firstName} ${lastName}`;
    }
    const getCommentUserColour = (commentUsers: UserType[], comment: PostComment): string => {
        return commentUsers.find((user: UserType) => user.id === comment.contactId)?.favouriteColour || 'lightgreen';
    }

    const handleAddComment = async (postId: number, comment: string) => {
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/post/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: comment,
                    contactId: user!.id,
                    postId: postId,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add comment');
            }
    
            const newComment = await response.json();
            setPostComments([...postComments, newComment]);
            await fetchCommentUsers(newComment.contactId);
        } 
        catch (error) {
            console.error('Error adding comment:', error);
        }
    }


    const visibleComments = showAllComments ? postComments : postComments.slice(0, 3);

    return (
        <>
            <div className="comment-container">
            { postComments.length > 3 && (
                <button className="see-previous-comments-button" onClick={() => setShowAllComments(!showAllComments)}>
                    { !showAllComments ? 'See previous comments' : 'Hide previous comments'}
                </button>
            )}
            { visibleComments.map((comment) => (
                <div key={comment.id} className="comment-item">
                    <Avatar username={getCommentUserName(commentUsers, comment)} backgroundColor={getCommentUserColour(commentUsers, comment)}/>
                    <div className="comment-content">
                        <h4>{getCommentUserName(commentUsers, comment)}</h4>
                        <p>{comment.content}</p>
                    </div>
                </div>
            ))}
            </div>
            <CommentForm postId={postId} onAddComment={handleAddComment} />
        </>
        
    )
}

export default Comment;