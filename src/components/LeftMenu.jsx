import { useNavigate } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import profileIcon from "../assets/profile-icon.svg";

export const LeftMenu = () => {
	const navigate = useNavigate();
	return (
		<menu className="menu">
			<button onClick={() => navigate("/posts")}>
				<img src={homeIcon} alt="Home" />
			</button>
			<button onClick={() => navigate("/profile")}>
				<img src={profileIcon} alt="Profile" />
			</button>
		</menu>
	);
};
