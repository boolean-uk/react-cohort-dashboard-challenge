import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentsContext, UsersContext, PostsContext } from "../../../../App";
import Comment from "../../CommentSection/Comment";
import CommentForm from "../../CommentSection/CommentForm";

export default function Post() {
  const { users, loggedInUser } = useContext(UsersContext);
  const {posts, setPosts} = useContext(PostsContext)
  const [post, setPost] = useState([]);

  const urlParams = useParams();
  const url = Number(urlParams.id);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${url}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
  }, [setPost]);

  
    const user = users.find((user) => {if(user.id === post.contactId) return user})


  return (
    <section className="post-background">
      <section className="post-container">
      <div className="post-header">
        {user && 
        <div className="profile-initials" style={{backgroundColor: user.favouriteColour}}>
          <p className="initials" >
            {user.firstName[0]}
            {user.lastName[0]}
          </p>
        </div>}
        {user && 
        <div className="post-information">
          <p id="profile-name">
            {user.firstName} {user.lastName}
          </p>
            <p id="post-title">{post.title}</p>
        </div>}
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="comment-section">
          <Comment post={post}/>
          <CommentForm 
            loggedInUser={loggedInUser}
            post={post}/>
      </div>
    </section>
    </section>
    
  );
}
