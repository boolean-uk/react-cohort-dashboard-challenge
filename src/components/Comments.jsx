import { useState, useEffect } from "react"
import Comment from "./Comment"
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers"
import AddComment from "./AddComment"

export default function Comments({ post }) {
	const { currentUser, users } = useUsers()
	const [comments, setComments] = useState([])

	useEffect(() => {
		fetch(
			`https://boolean-uk-api-server.fly.dev/PerikK/post/${post.id}/comment`
		)
			.then((response) => response.json())
			.then(setComments)
	}, [post])

	return (
		<>
			<ul className='flex flex-col gap-2 m-1'>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment.id}
							comment={comment}
							post={post}
							setComments={setComments}
						/>
					)
				})}
			</ul>
			<AddComment />
		</>
	)
}
