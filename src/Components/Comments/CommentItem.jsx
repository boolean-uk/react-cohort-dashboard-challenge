/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

export default function CommentItem({comment}) {
    const [commentAuthor, setCommentAuthor] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/siljegja/contact/${comment.contactId}`
			);
			const jsonData = await response.json();

			setCommentAuthor(jsonData);
		};

		fetchData();
	}, [comment]);

	if (!commentAuthor)
		return (
			<>
				<div>
					<p className="loading">Loading...</p>
				</div>
			</>
		);
        
    return (
        <>
            <section className="comment-card">
                <div className="author-info">
                    <div className="author-avatar" style={{backgroundColor: commentAuthor.favouriteColour}}>
                        <div className="avatar-initials">
                            <span>
                                {commentAuthor.firstName[0]}{commentAuthor.lastName[0]}
                            </span>
                        </div>
                    </div>
                    <div className="comment-content">
                        <h4>{commentAuthor.firstName} {commentAuthor.lastName}</h4>
                        <p> {comment.content} </p>
                    </div>
                </div>
            </section>
        </>

    )
}