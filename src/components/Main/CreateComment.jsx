import { useContext } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import { UserContext } from "../../App";

export const CreateComment = () => {
	const user = useContext(UserContext);
	return (
		<div className="create-post-item">
			<ProfileIcon user={user} />
			<form action="">
				<input
					type="text"
					placeholder="Add a comment..."
					className="form-text-input"
				/>
				<button>{`>`}</button>
			</form>
		</div>
	);
};
