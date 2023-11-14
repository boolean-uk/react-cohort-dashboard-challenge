import { Routes, Route } from "react-router-dom";
import "./app.css";
import { Nav, Feed, Post, Header } from "./index";

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="main">
          <div className="nav-bar">
            <Nav />
          </div>
          <Routes>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/post/:postId" element={<Post />}></Route>
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
