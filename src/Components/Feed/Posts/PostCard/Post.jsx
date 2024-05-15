import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentsContext, UsersContext, PostsContext } from "../../../../App";
import Comment from "../../CommentSection/Comment";
import CommentForm from "../../CommentSection/CommentForm";

export default function Post() {
  const { users, loggedInUser } = useContext(UsersContext);
  const {posts, setPosts} = useContext(PostsContext)
  const {comments, setComments} = useContext(CommentsContext)
  const [post, setPost] = useState([]);

  const urlParams = useParams();
  const url = Number(urlParams.id);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${url}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
  }, [setPost]);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${url}/comment`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [setComments]);


  const user = users.find((user) => {
      if (user.id === post.contactId) return user;
    });
    console.log(user.firstName)

  return (
    <section className="post-container">
      <div className="post-header">
        <div className="profile-initials">
          <p>
            {/* {user.firstName[0]}
            {user.lastName[0]} */}
          </p>
        </div>
        <div className="post-information">
          <p id="profile-name">
            {/* {user.firstName} {user.lastName} */}
          </p>
            <p id="post-title">{post.title}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="comment-section">
        {comments.map((comment) => (
          <Comment             
          key={comment.id}
          comment={comment}/>
        ))}
        <CommentForm 
            loggedInUser={loggedInUser}
            post={post}/>
      </div>
    </section>
  );
}
