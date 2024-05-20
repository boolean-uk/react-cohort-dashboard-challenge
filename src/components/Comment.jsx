import { useState, useEffect } from "react"
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers"

export default function Comment({ comment }) {
	const [user, setUser] = useState()
	const { currentUser, users } = useUsers()

	useEffect(() => {
		if (users) {
			const foundUser = users.find(
				(user) => user.id === comment.contactId
			)
			setUser(foundUser)
		}
	}, [ ])

	if (!user || !user.firstName) return null

	return (
		<li className='flex items-center '>
			<Avatar userId={user.id} />
			<div className='flex items-center justify-start rounded-lg px-6 bg-[#e6ebf5] h-20 w-full '>
				<p>{comment.content}</p>
			</div>
		</li>
	)
}
