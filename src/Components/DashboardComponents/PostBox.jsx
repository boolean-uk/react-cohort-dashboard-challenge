import React, { useState } from "react";
import ProfilePicture from "../ProfileComponents/ProfilePicture";
import { PostContext, UserContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function PostBox() {
  const postContext = useContext(PostContext);
  const {user} = useContext(UserContext)
  const [postContent, setPostContent] = useState({
    id: '',
    contactId: 69,
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostContent({ ...postContent, [name]: value });
    console.log(value);
  };

  const addPost = (event) => {
    event.preventDefault();
    const newPostContent = { ...postContent, id: postContext.posts.length + 1 };
    postToAPI()
    let prevPosts = postContext.posts;
    postContext.setPosts([...prevPosts, newPostContent]);
    console.log(postContext.posts)
  };

  // TODO: make sure the api call is made after the posts state is updated! 
  
  const postToAPI = () => {
    fetch(`https://boolean-api-server.fly.dev/sebastianEngan/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postContent)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post saved successfully:", data);
        setPostContent({
          id: postContext.posts.length + 2,
          contactId: 69,
          title: "",
          content: "",
        });
      });
  };
  return (
    <>
      <div className="yellow">
      <Link to="/profile">
            <ProfilePicture
              firstName={user.firstName}
              lastName={user.lastName}
              favouriteColour={"green"}
            />
        </Link>
        <div className="post-box-input">
          <form onSubmit={addPost}>
            <div className="post-box-textarea-section">
              <textarea
                className="title"
                type="text"
                name="title"
                placeholder="Title"
                value={postContent.title}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="post-box-textarea-section">
              <textarea
                className="content"
                type="text"
                name="content"
                placeholder="What's on your mind?"
                value={postContent.content}
                onChange={handleChange}
              ></textarea>
            </div>
            <button>Post</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostBox;
