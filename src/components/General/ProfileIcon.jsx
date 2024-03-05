import { useNavigate } from "react-router-dom";

export const ProfileIcon = () => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate("/id")} className="profile-icon">
			LW
		</button>
	);
};
