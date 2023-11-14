import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import NavBar from "./components/NavBar/NavBar";
import PostPageSection from "./views/Home/components/PostPageSection/PostPageSection";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/:postid/post" element={<PostPageSection />}></Route>
      </Routes>
    </>
  );
}

export default App;
