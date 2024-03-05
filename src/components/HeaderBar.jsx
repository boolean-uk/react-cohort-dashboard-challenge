import { useContext } from "react";
import titleIcon from "../assets/title-header.svg";
import { ProfileIcon } from "./General/ProfileIcon";
import { UserContext } from "../App";

export const HeaderBar = () => {
	const user = useContext(UserContext);
	return (
		<header>
			<img src={titleIcon} alt="Title icon" />
			<ProfileIcon user={user} />
		</header>
	);
};
