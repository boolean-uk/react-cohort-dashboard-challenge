import { useEffect, useState, createContext } from "react";
import "./App.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/NavBar";
import PostDetails from "./components/PostDetails";
import UserProfile from "./components/UserProfile";

const Context = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  //https://boolean-uk-api-server.fly.dev/MalteStengard/post/{postId}/comment
  //to get comments for each post
  //https://boolean-uk-api-server.fly.dev/MalteStengard/contact
  //to get contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://boolean-uk-api-server.fly.dev/MalteStengard/post"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        const commentsData = await Promise.all(
          posts.map(async (post) => {
            const response = await fetch(
              `https://boolean-uk-api-server.fly.dev/MalteStengard/post/${post.id}/comment`
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch comments for post ${post.id}`);
            }
            const data = await response.json();
            return { postId: post.id, comments: data };
          })
        );
        console.log("commentsData", commentsData);
  
        const newComments = commentsData.flatMap(post => post.comments.map(comment => ({
          ...comment,
          postId: post.postId
        })));
  
        setComments((prevComments) => {
          const existingCommentIds = new Set(prevComments.map(comment => comment.id));
          const uniqueNewComments = newComments.filter(comment => !existingCommentIds.has(comment.id));
          return [...prevComments, ...uniqueNewComments];
        });
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
  
    if (posts.length > 0) {
      fetchPostComments();
    }
  }, [posts]);

  console.log("comments " + comments);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://boolean-uk-api-server.fly.dev/MalteStengard/contact"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleCreatePost = () => {
    const newPost = {
      id: posts.length + 1, 
      contactId: 1, 
      content: newPostContent,
      title: "New Post" 
    };
    setPosts([newPost, ...posts]);
    setNewPostContent(""); 
  };

  console.log(posts);
  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        comments,
        setComments,
        posts,
        setPosts,
        handleNavigation,
      }}
    >
        <Header />
        <div className="input-button-container">
          <input
            type="text"
            placeholder="Write your post here..."
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <button
            id="create-post-button"
            onClick={handleCreatePost}
          >
            Post
          </button>
        </div>
        <div className="layout">
          <LeftMenu />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/profile/:id" element={<UserProfile />} />
          </Routes>
        </div>
    </Context.Provider>
  );
}

export { App, Context };
