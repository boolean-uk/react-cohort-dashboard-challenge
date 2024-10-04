/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/PostComment.css';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';

export default function PostComment({ comment }) {
	const [commentContact, setCommentContact] = useState(null);

	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${comment.contactId}`
			);
			const jsonData = await response.json();

			setCommentContact(jsonData);
		};

		fetchContact();
	}, [comment]);

	if (!commentContact)
		return (
			<>
				<div>
					<p className="loading" style={{ color: 'black' }}>
						Loading...
					</p>
				</div>
			</>
		);

	return (
		<>
			<div className="comment-card" key={comment.id}>
				<UserAvatar user={commentContact} isLink={true} isComment={true} />

				<div className="comment-body">
					<h4>
						<Link to={`/view/profile/${commentContact.id}`} className="link">
							{commentContact.firstName} {commentContact.lastName}
						</Link>
					</h4>

					<p>{comment.content}</p>
				</div>
			</div>
		</>
	);
}
