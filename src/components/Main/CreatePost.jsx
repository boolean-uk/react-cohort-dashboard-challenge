import { ProfileIcon } from "../General/ProfileIcon";

export const CreatePost = () => {
	return (
		<div className="card create-post-item">
			<ProfileIcon />
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
