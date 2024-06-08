import { useState, useEffect } from "react"
import Comment from "./Comment"
import AddComment from "./AddComment"

export default function Comments({ post }) {
	const [comments, setComments] = useState([])

	useEffect(() => {
		const storedComments = JSON.parse(
			localStorage.getItem(`comments_${post.id}`)
		)
		if (storedComments) {
			setComments(storedComments)
		} else {
			fetch(
				`https://boolean-uk-api-server.fly.dev/PerikK/post/${post.id}/comment`
			)
				.then((response) => response.json())
				.then((data) => {
					setComments(data)
					localStorage.setItem(
						`comments_${post.id}`,
						JSON.stringify(data)
					)
				})
				.catch((error) =>
					console.error("Error fetching comments:", error)
				)
		}
	}, [post])

	return (
		<>
			<ul className='flex flex-col gap-2 m-1'>
				{comments.map((comment) => {
					return <Comment key={comment.id} comment={comment} />
				})}
			</ul>
			<AddComment
				post={post}
				comments={comments}
				setComments={setComments}
			/>
		</>
	)
}
