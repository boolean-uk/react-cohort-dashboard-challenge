import { Link } from "react-router-dom"
import { useState } from "react"
import usePosts from "../hooks/usePosts"
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers"

export default function CreatePost() {
	const { currentUser } = useUsers()
	const { posts, setPosts } = usePosts()
	const [newPost, setNewPost] = useState({
		title: "",
		content: "",
		contactId: 1,
	})

	if (!posts) {
		return <p>Loading</p>
	}
	const userId = 1

	function handleChange(e) {
		const { name, value } = e.target
		const title = value.split(" ").slice(0, 4).join(" ")

		setNewPost({
			...newPost,
			[name]: value,
			title: title,
			contactId: 1,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()

		async function addNewPost() {
			const options = {
				method: "POST",
				body: JSON.stringify(newPost),
				headers: {
					"Content-type": "application/json",
				},
			}

			const response = await fetch(
				"https://boolean-api-server.fly.dev/PerikK/post",
				options
			)
			const data = await response.json()

			setPosts([...posts, data])
		}

		addNewPost()

		setNewPost({
			title: "",
			content: "",
			contactId: 1,
		})
	}

	return (
		<div className='flex flex-row flex-nowrap border border-stone-400 rounded-md my-2 py-4 size-full px-6 items-center  '>
			<Avatar userId={userId} />

			<form
				onSubmit={handleSubmit}
				className='flex flex-grow justify-between ml-5 '
			>
				<input
					type='text'
					placeholder="What's on your mind?"
					name='content'
					onChange={handleChange}
					value={newPost.content}
					className='border-2 bg-[#e6ebf5] w-4/5 p-3 h-full hover:border-[#000046]'
				/>

				<button className='inline-flex justify-center py-3 px-14 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#000046] hover:bg-[#64dc78]'>
					Post
				</button>
			</form>
		</div>
	)
}
