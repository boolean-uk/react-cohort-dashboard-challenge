import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navigation;
