import React, { useEffect, useState } from 'react';


const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

  
   

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/MayraMahamud/post/${postId}/comment`)
        .then(response => response.json())
        .then(data => setComments(data));
    }, [postId]);

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p><strong>{comment.author}</strong>: {comment.content}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;