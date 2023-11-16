import Mainpost from "./Components/Mainpost";
import Posts from './Components/Posts'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Menu from "./Components/Menu";
import "./Components/App.css";


export default function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newCommentContent, setNewCommentContent] = useState({});

  return (
    <div className="parent">
      <Header />
      <Menu />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Mainpost posts={posts} setPosts={setPosts} contacts={contacts} setContacts={setContacts} comments={comments} setComments={setComments} newPostContent={newPostContent} setNewPostContent={setNewPostContent} newCommentContent={newCommentContent} setNewCommentContent={setNewCommentContent}   />} />
        <Route path="/comments/:postId" element={<Posts contacts={contacts} />}
        />
      </Routes>
      </div>
    </div>
  );
}