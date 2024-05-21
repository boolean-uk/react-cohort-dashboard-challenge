import { useState } from "react"
import useUsers from "../hooks/useUsers"
import Avatar from "./Avatar"

export default function AddComment({ post, setComments }) {
	const { currentUser } = useUsers()
	const [newComment, setNewComment] = useState({
		postId: post.id,
		content: "",
		contactId: currentUser.id,
	})

	function handleChange(e) {
		const { value } = e.target

		setNewComment({
			...newComment,
			postId: post.id,
			contactId: currentUser.id,
			content: value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		if(!newComment.content){return}
		fetch(
			`https://boolean-api-server.fly.dev/PerikK/post/${post.id}/comment`,
			{
				method: "POST",
				body: JSON.stringify(newComment),
				headers: {
					"Content-type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setComments((prevComments) => [...prevComments, data])

				const storedComments =
					JSON.parse(localStorage.getItem(`comments_${post.id}`)) ||
					[]
				localStorage.setItem(
					`comments_${post.id}`,
					JSON.stringify([...storedComments, data])
				)

				setNewComment({
					postId: post.id,
					contactId: currentUser.id,
					content: "",
				})
			})
			.catch((error) => console.error("Error:", error))
	}

	return (
		<div className='flex items-center'>
			<Avatar userId={currentUser.id} />
			<form
				onSubmit={handleSubmit}
				className='flex flex-row flex-nowrap bg-[#fff] rounded-md my-6 size-full hover:border-[#000046]'
			>
				<input
					type='text'
					name='content'
					onChange={handleChange}
					value={newComment.content}
					placeholder='Add a comment...'
					className='border-2 rounded-md bg-[#e6ebf5] w-full h-16 my-5 px-5'
				/>
			</form>
		</div>
	)
}
