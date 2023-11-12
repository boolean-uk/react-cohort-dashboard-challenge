import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import PostDetails from "./components/PostDetails";
import "./styles/App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [commentInputs, setCommentInputs] = useState({});
  const { postId } = useParams();
  const reversedPostData = [...posts].reverse();

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/post")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    contacts.forEach((contact) => {
      if (!postComments[contact.id]) {
        fetch(
          `https://boolean-api-server.fly.dev/Callumhayden99/post/${contact.id}/comment`
        )
          .then((response) => response.json())
          .then((data) => {
            setPostComments((prevData) => ({
              ...prevData,
              [contact.id]: data,
            }));
          })
          .catch((error) =>
            console.error("Error fetching post comments:", error)
          );
      }
    });
  }, [contacts, postComments]);

  const mainUserInitials = "CH";

  const mainPostSubmit = (event) => {
    event.preventDefault();

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "",
        contactId: 16,
        content: newPost,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, data]);
        setNewPost("");
      })
      .catch((error) => console.error("Error submitting main post:", error));
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs((prevInputs) => ({
      ...prevInputs,
      [postId]: value,
    }));
  };

  const handleSubmit = (event, postId) => {
    event.preventDefault();
    const newCommentValue = commentInputs[postId];

    fetch(
      `https://boolean-api-server.fly.dev/Callumhayden99/post/${postId}/comment`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: "",
          postId: 1,
          contactId: 16,
          content: newCommentValue,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPostComments((prevComments) => ({
          ...prevComments,
          [postId]: [...(prevComments[postId] || []), data],
        }));
        setCommentInputs((prevInputs) => ({
          ...prevInputs,
          [postId]: "", // Clear the input after submission
        }));
      })
      .catch((error) => console.error("Error commenting on post:", error));
  };

  return (
    <div className="container">
    <Header/>
    <main className="main-grid">
      <LeftMenu/>

      <Routes>
        <Route path="/" element={<MainContent
          newPost={newPost}
          setNewPost={setNewPost}
          mainPostSubmit={mainPostSubmit}
          reversedPostData={reversedPostData}
          contacts={contacts}
          postComments={postComments}
          handleSubmit={handleSubmit}
          commentInputs={commentInputs}
          handleCommentChange={handleCommentChange}
          mainUserInitials={mainUserInitials}
        />}/>
        <Route path="/comments/:postId" element={<PostDetails />} />
      </Routes>
    </main>
  </div>
      
  );
}

export default App;
