import Comment from './Comment';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Comments ({ id, users, comments, setComments }) {

    const [showAllComments, setShowAllComments] = useState(false);

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${id}/comment`)
          .then(res => res.json())
          .then(data => setComments(data));
    }, [id, setComments]);

    // Fetch comments again
    const updateComments = () => {
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${id}/comment`)
          .then(res => res.json())
          .then(data => setComments(data));
    };

    // eslint-disable-next-line react/prop-types
    const displayedComments = showAllComments ? comments : comments.slice(-3);

    return (
        <div>
            {displayedComments.map(c => 
                <Comment 
                    key={c.id} 
                    comment={c} 
                    users={users} 
                    updateComments={updateComments} // Pass the update function
                />
            )}

             {/* eslint-disable-next-line react/prop-types */}
            {comments.length > 3 && !showAllComments && (
                <button className='previousComments' onClick={() => setShowAllComments(true)}>
                    See previous comments
                </button>
            )}
        </div>
    );
}
