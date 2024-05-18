import { Link, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import ViewPost from "../Components/ViewPost";
import HeaderLogo from "../images/HeaderLogo";
import HomeIcon from "../images/HomeIcon";

export default function App() {
  return (
    <>
      <div className="header">
        <Link to="/Home">
          <HeaderLogo />
        </Link>
      </div>
      <div className="home">
        <Link to="/Home">
          <HomeIcon />
          <br />
          Home
        </Link>
      </div>
      <div className="main">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ViewPost/:id" element={<ViewPost />} />
        </Routes>
      </div>
    </>
  );
}
