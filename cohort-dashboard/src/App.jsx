import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import PostPage from "./pages/Home/components/PostPage/PostPage";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id/profile"></Route>
        <Route path="/:postid/post" element={<PostPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
