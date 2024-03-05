import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import { useState } from "react";

export const LeftMenu = () => {
	const [active, setActive] = useState("home");

	return (
		<menu className="menu">
			<Link
				to="/posts"
				className={active === "home" ? "active" : ""}
				onClick={() => setActive("home")}
			>
				<img src={homeIcon} alt="Home" style={{}} />
				<p>Home</p>
			</Link>
			<Link
				to="/profile"
				className={active === "profile" ? "active" : ""}
				onClick={() => setActive("profile")}
			>
				<img src={profileIcon} alt="Profile" />
				<p>Profile</p>
			</Link>
		</menu>
	);
};
