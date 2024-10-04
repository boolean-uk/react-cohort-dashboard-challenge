import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "./PostContext";
import "../stylesheets/postfeed.css";
import InitialCircle from './InitialCircle';

function NewPostForm() {
	const { addPost } = useContext(PostContext);
	const [post, setPost] = useState({
		contactId: 1,
		title: "",
		content: "",
	});

	const [author, setAuthor] = useState(null);

	const navigate = useNavigate();
	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/1`);
			const jsonData = await response.json();
			setAuthor(jsonData);
		};
	
		fetchContact();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		fetch("https://boolean-uk-api-server.fly.dev/KajaPlaszko/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Network response was not ok " + response.statusText
					);
				}
				return response.json();
			})
			.then((newPost) => {
				addPost(newPost);
				setPost({ contactId: 1, title: "", content: "" });
				navigate("/");
			})
			.catch((error) => {
				console.error("Error posting:", error);
			});
	}

	function handleChange(e) {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	}


	return (
		<div>
			<div className="form-container">
				<form
					className="postform"
					onSubmit={handleSubmit}
				>
					<InitialCircle 
                firstName={author?.firstName} 
                lastName={author?.lastName} 
                color={author?.favouriteColour}
            />
					<input
						type="text"
						name="content"
						placeholder="What's on your mind?"
						value={post.content}
						onChange={handleChange}
						required
					/>

					<button type="submit">Post</button>
				</form>
			</div>
		</div>
	);
}

export default NewPostForm;
