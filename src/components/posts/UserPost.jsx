import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../App";
import CommentListItem from "./CommentListItem";
import CreateComment from "./CreateComment";

export default function UserPost() {
  const { id } = useParams();
  const context = useContext(MyContext)

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [postUser, setPostUser] = useState([])

  const getComments = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/post/${id}/comment
    `)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  const getPost = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/post/${id}
    `)
      .then((response) => response.json())
      .then((data) => setPost(data));
  };

  const getPostUser = (contactId) => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/contact/${contactId}`)
      .then((response) => response.json())
      .then((data) => setPostUser(data));
  };

  useEffect(() => {
    if (post.contactId) {
      getPostUser(post.contactId);
    }
  }, [post]);
  
  useEffect(() => {
    getComments();
    getPost();
  }, []);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

    const initials = getInitials(postUser.firstName, postUser.lastName);


  console.log("comments: ", comments);

  return (
    <div className="post">
      <div className="post-top">
        <div
          className="header-profile-icon"
          style={{ backgroundColor: postUser.favouriteColour }}
        >
          {initials}
        </div>
        <p>
          {postUser.firstName}
          {postUser.lastName}
        </p>
        
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-comment">
        <ul>
          {comments.map((comment, index) => {
            const commentUser = context.contacts.find(
              (person) => person.id == Number(comment.contactId)
            );
            return (
              <CommentListItem
                key={index}
                comment={comment}
                commentUser={commentUser || null}
              />
            );
          })}
        </ul>
      </div>
      <div className="create-comment">
        <CreateComment
          comments={comments}
          setComments={setComments}
          post={post}
        />
      </div>
    </div>
  );
}
