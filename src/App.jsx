import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
