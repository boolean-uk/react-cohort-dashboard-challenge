import titleIcon from "../assets/title-header.svg";
import { ProfileIcon } from "./General/ProfileIcon";

export const HeaderBar = () => {
	return (
		<header>
			<img src={titleIcon} alt="Title icon" />
			<ProfileIcon />
		</header>
	);
};
