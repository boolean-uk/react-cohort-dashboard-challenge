import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import { useContext } from "react";
import { LoggedInUserContext } from "../App";

export const LeftMenu = () => {
	const user = useContext(LoggedInUserContext);

	return (
		<menu className="menu">
			<NavLink to={"/posts"} end activeClassName="active">
				<img src={homeIcon} alt="Home" style={{}} />
				<p>Home</p>
			</NavLink>
			<NavLink to={`/profile/${user.id}`} activeClassName="active">
				<img src={profileIcon} alt="Profile" />
				<p>Profile</p>
			</NavLink>
		</menu>
	);
};
