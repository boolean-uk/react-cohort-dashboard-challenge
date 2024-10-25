import React, { useState} from "react";
import { createComment } from "./api/api";


function CommentForm({ setComments }) {
    const [content, setContent] = useState('');
   
    


    const handleCommentSubmit = async (e) => {
        e.preventDefault();
      
        const newComment = await createComment({ content });
        setComments(prevComment =>[newComment,...prevComment]);
        
        setContent('');
      
    };
     

    return(
        <form onSubmit={handleCommentSubmit}>
            <input type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Comment...?"
            />
            
            <button type="submit">Comment</button>
        </form>
        
    );
}
export default CommentForm;

