import { useState, useEffect } from "react";

function Comments({ post }) {
  const [comments, setComments] = useState([]);

  const comment = post.id;
  const URL3 = `https://boolean-api-server.fly.dev/LAVINIABENZAR/POST/${comment}/COMMENT`;

  useEffect(() => {
    fetch(URL3)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  console.log(comments)



  return (
    <>
       {comments.map((comment) => {
        return (
          <div className='comments' key={comment.id}>
            <div className='commentInitials'>
              <p>{comment.name}</p>
            </div>
            <div className='commentBox'>
              <p>{comment.content}</p>
            </div>
          </div>
        );
      })}
    
    
    </>
     
       
    )
}

export default Comments;
