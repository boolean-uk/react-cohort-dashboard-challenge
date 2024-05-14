import { useEffect } from "react";

export default function Comment({ post, comments, setComments, user, posts, users}) {

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`
    )
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [setComments]);


  const commentor = users.find((commentor) => {if(commentor.id === comments.contactId) return user})

  return (
    <>
      {comments.map((comment, index) => 
      <section className="comment" key={index}>
        <div className="profile-initials">
          <p>
            {/* {commentor.firstName[0]}
            {commentor.lastName[0]} */}
          </p>
        </div>
        <div className="comment-box">
          <p>{comment.content}</p>
        </div>
      </section>)}
      
    </>
      
  );
}
