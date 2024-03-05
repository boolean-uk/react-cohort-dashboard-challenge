import { ProfileIcon } from "../General/ProfileIcon";

export const CreateComment = () => {
	return (
		<div className="create-post-item">
			<ProfileIcon />
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
