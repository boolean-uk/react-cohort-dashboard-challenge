import { useState } from "react"
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers"

export default function AddComment({ post, comments, setComments }) {
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

	console.log("com", currentUser.id, post.id)

	async function handleSubmit(e) {
		e.preventDefault()

		const options = {
			method: "POST",
			body: JSON.stringify(newComment),
			headers: {
				"Content-type": "application/json",
			},
		}

		try {
			const response = await fetch(
				`https://boolean-api-server.fly.dev/PerikK/post/${post.id}/comment`,
				options
			)
			const data = await response.json()

			setComments([...comments, data])

			setNewComment({
				title: "",
				content: "",
				contactId: 1,
			})
		} catch (error) {
			console.error("Error adding post:", error)
		}
	}

	return (
		<div className='flex items-center'>
      <Avatar userId={currentUser.id} />
      <form onSubmit={handleSubmit} className='flex flex-row flex-nowrap bg-[#fff] rounded-md my-6 size-full hover:border-[#000046]'>

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
