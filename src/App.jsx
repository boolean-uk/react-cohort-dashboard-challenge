import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import Posts from "./components/Posts";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostForm />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
