import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App'; 
import { PostContext } from '../App'; 

export default function CreateNewPost() {
  const { activeUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");

  const submitNewPost = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPostObject = {
      contactId: activeUser.id,
      content: newPostContent,
      
      title: newPostTitle, 
    };

    fetch("https://boolean-api-server.fly.dev/SanderSaether/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostObject),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        setNewPostContent("");
        setNewPostTitle("")
            setPosts([ { ...newPostObject, id: data.id }, ...posts ]);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  return (
    <div className="create-post">
      <form className="create-post-form" onSubmit={submitNewPost}>
        <div
          className="create-post-profile"
          style={{ backgroundColor: activeUser.favouriteColour }}>
          <Link to={`/profile/${activeUser.id}`}>
            <h2>
              {activeUser.firstName.charAt(0)}
              {activeUser.lastName.charAt(0)}
            </h2>
          </Link>
        </div>
        <input
          type="text"
          placeholder="Post Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="create-post-title"
        />
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
