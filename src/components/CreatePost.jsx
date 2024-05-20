import { useState } from "react"
import { Link } from "react-router-dom"
import usePosts from "../hooks/usePosts"
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers"

export default function CreatePost() {
	const { posts } = usePosts()
	if (!posts) {
		return <p>Loading</p>
	}
	const userId = 2

	return (
		<div className='flex justify-between border border-stone-400 rounded-md my-2 py-4 size-full px-6 items-center  '>
			<Avatar userId={userId} />

			<Link to='/newPost' className='border-2 bg-[#e6ebf5] w-4/5 p-3 h-full hover:border-[#000046]'>
				<input
					type='text'					
					placeholder="What's on your mind?"
					className="bg-[#e6ebf5]"
				/>
			</Link>

			<button className='inline-flex justify-center py-3 px-14 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#000046] hover:bg-[#64dc78]'>Post</button>
		</div>
	)
}
