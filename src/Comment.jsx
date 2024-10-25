import React from "react";

function Comment({ comment }) {
    return(
        <div>
           
            <p>{comment.content}</p>
          
        </div>
    );
}
export default Comment;