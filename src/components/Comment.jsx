/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../stylesheets/postfeed.css";
import InitialCircle from './InitialCircle';

function Comment({ comment }) {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		if (comment.contactId) {
			const fetchContact = async () => {
				try {
					const response = await fetch(
						`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${comment.contactId}`
					);
					const jsonData = await response.json();
					setAuthor(jsonData);
				} catch (error) {
					console.error("Error fetching author:", error);
				}
			};
			fetchContact();
		}
	}, [comment.contactId]);


	return (
		<div className="comment">
            
			<InitialCircle 
                firstName={author?.firstName} 
                lastName={author?.lastName} 
                color={author?.favouriteColour}
            />
			<div className="comment-container">
				<div>
					<h5>
						{author
							? `${author.firstName} ${author.lastName}`
							: comment.authorName}
					</h5>
					<p>{comment.content}</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
