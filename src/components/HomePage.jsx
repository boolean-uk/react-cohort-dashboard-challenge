import { useState } from "react"
import CreatePost from "./CreatePost"
import Posts from "./Posts"
import UserProfilePage from "./UserProfilePage"

export default function HomePage({ avatarClicked }) {
	return (
		<div className='flex flex-col gap-3 m-3'>
			{avatarClicked ? (
				<UserProfilePage />
			) : (
				<>
					<CreatePost />
					<Posts />
				</>
			)}
		</div>
	)
}
