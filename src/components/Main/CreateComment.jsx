import { useContext, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import { UserContext } from "../../App";

export const CreateComment = () => {
	const user = useContext(UserContext);
	const [formData, setFormData] = useState("");

	const handleInput = (event) => {
		setFormData(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Posting new comment");
		setFormData("");
	};

	return (
		<div className="create-post-item">
			<ProfileIcon user={user} />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add a comment..."
					className="form-text-input"
					value={formData}
					onChange={handleInput}
				/>
				<button>{`>`}</button>
			</form>
		</div>
	);
};
