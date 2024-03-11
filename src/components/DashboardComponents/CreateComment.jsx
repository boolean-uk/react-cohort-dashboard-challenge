import { DataContext } from "../../App";
import { useContext, useState, useEffect } from "react";

const initState = { content: "" };
export default function CreateComment({post, setComments, comments}) {
  const users = useContext(DataContext).users;
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const setPosts = useContext(DataContext).setPosts;
  const [newComment, setNewComment] = useState(initState); 

  function handleChange(event) {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    newComment.contactId = user.id
    newComment.postId = post.id;

    console.log(newComment)
    fetch("https://boolean-api-server.fly.dev/pkekkonen/post/" + post.id + "/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        responseData.user = user
        setComments([...comments, responseData]);
      });

    setNewComment(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {user && (
        <div
          className="circle header-top"
          style={{ background: user.favouriteColour }}
        >
          {user.firstName[0] + "" + user.lastName[0]}
        </div>
      )}
      <input
        type="text-area"
        id="content"
        name="content"
        placeholder="Add a comment..."
        onChange={handleChange}
        value={newComment.content}
      />
      <button className="post-comment" type="submit">Post</button>
    </form>
  );
}
