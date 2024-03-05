import { useContext } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import { UserContext } from "../../App";

export const CreatePost = () => {
	const user = useContext(UserContext);
	return (
		<div className="card create-post-item">
			<ProfileIcon user={user} />
			<form action="">
				<input
					type="text"
					placeholder="What's on your mind?"
					className="form-text-input"
				/>
				<button>Post</button>
			</form>
		</div>
	);
};
