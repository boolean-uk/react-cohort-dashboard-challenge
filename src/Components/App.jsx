import PostsDisplay from "./PostsDisplay";
import PostDetail from './PostDetail'
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

import "../App.css";
import LeftMenu from "./LeftMenu";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newCommentContent, setNewCommentContent] = useState({});

  return (
    <div className="parent">
      <Header />
      <LeftMenu />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<PostsDisplay posts={posts} setPosts={setPosts} contacts={contacts} setContacts={setContacts} comments={comments} setComments={setComments} newPostContent={newPostContent} setNewPostContent={setNewPostContent} newCommentContent={newCommentContent} setNewCommentContent={setNewCommentContent}   />} />
        <Route path="/comments/:postId" element={<PostDetail contacts={contacts} />}
        />
      </Routes>
      </div>
    </div>
  );
}
