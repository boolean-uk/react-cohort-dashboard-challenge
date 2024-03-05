import { Link } from "react-router-dom";
import { ProfileIcon } from "../General/ProfileIcon";
import { Comment } from "./Comment";
import { CreateComment } from "./CreateComment";
import { PropTypes } from "prop-types";
import { getRequest } from "../../utilites/apiRequests";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

export const Post = ({ post }) => {
	const user = useContext(UserContext);
	const [postOwner, setPostOwner] = useState(null);
	const [comments, setComments] = useState(null);

	useEffect(() => {
		getRequest(
			`https://boolean-api-server.fly.dev/LinusWillmont/contact/${post.contactId}`
		)
			.then((postOwner) => {
				setPostOwner(postOwner);
			})
			.catch((error) => console.error("Failed to get post owner", error));
	}, [post.contactId]);

	useEffect(() => {
		getRequest(
			`https://boolean-api-server.fly.dev/LinusWillmont/post/${post.id}/comment`
		)
			.then((comments) => {
				setComments(comments);
			})
			.catch((error) => console.error("Failed to get post comments", error));
	}, [post.id]);

	if (!postOwner) {
		return (
			<>
				<p>Loading</p>
			</>
		);
	} else {
		return (
			<div className="card post">
				<ProfileIcon user={user} />
				<h1>{`${postOwner.firstName} ${postOwner.lastName}`}</h1>
				<Link to={post.id}>{post.title}</Link>
				<p>{post.content}</p>
				{!comments ? (
					<p>Loading comments</p>
				) : (
					comments.map((comment) => {
						return <Comment key={comment.id} comment={comment} />;
					})
				)}
				<CreateComment />
			</div>
		);
	}
};

Post.propTypes = {
	post: PropTypes.object,
};
