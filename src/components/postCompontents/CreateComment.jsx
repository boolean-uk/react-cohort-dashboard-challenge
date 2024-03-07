import { useContext, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import { LoggedInUserContext } from "../../App";
import { postRequest } from "../../utilites/apiRequests";
import sendButton from "../../assets/send-icon48.png";
import PropTypes from "prop-types";

export const CreateComment = ({ postId, getComments }) => {
	const user = useContext(LoggedInUserContext);
	const [formData, setFormData] = useState("");

	const postComment = () => {
		return postRequest(`/post/${postId}/comment`, {
			postId: postId,
			content: formData,
			contactId: user.id,
		})
			.then((data) => console.log("New comment", data))
			.catch((error) => console.error("Failed to post comment", error));
	};

	const handleInput = (event) => {
		setFormData(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!formData.length) return;

		postComment()
			.then(() => getComments())
			.then(setFormData(""))
			.catch((error) => console.error(error));
	};

	return (
		<div className="create-post-item">
			<ProfileIcon user={user} />
			<form className="form-message" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add a comment..."
					className="form-text-input"
					value={formData}
					onChange={handleInput}
				/>
				<button className="message-post-button">
					<img src={sendButton} alt="Send" />
				</button>
			</form>
		</div>
	);
};

CreateComment.propTypes = {
	postId: PropTypes.number,
	getComments: PropTypes.func,
};
