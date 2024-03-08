import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/title-header.svg";
import axios from "axios";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

function Header() {
  const [authorName, setAuthorName] = useState("");
  const [favouriteColor, setFavouriteColour] = useState("");

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/contact/1`);
        const { firstName, lastName } = response.data;
        setAuthorName(`${firstName} ${lastName}`);
        setFavouriteColour(response.data.favouriteColour);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, []);

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  return (
    <header className="header blue">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </Link>
      <div className="spacer" />
      <Link to="/profile/1" className="user-initials-link">
        <div className="user-initials" style={{ background: favouriteColor }}>
          {getInitials(authorName)}
        </div>
      </Link>
    </header>
  );
}

export default Header;
