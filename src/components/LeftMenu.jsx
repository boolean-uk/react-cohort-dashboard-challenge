import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import { useContext, useState } from "react";
import { LoggedInUserContext } from "../App";

export const LeftMenu = () => {
	const [active, setActive] = useState("home");
	const user = useContext(LoggedInUserContext);

	return (
		<menu className="menu">
			<Link
				to={`/posts`}
				className={active === "home" ? "active" : ""}
				onClick={() => setActive("home")}
			>
				<img src={homeIcon} alt="Home" style={{}} />
				<p>Home</p>
			</Link>
			<Link
				to={`/profile/${user.id}`}
				className={active === "profile" ? "active" : ""}
				onClick={() => setActive("profile")}
			>
				<img src={profileIcon} alt="Profile" />
				<p>Profile</p>
			</Link>
		</menu>
	);
};
