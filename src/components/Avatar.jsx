import { Link } from "react-router-dom"
import useUsers from "../hooks/useUsers"

export default function Avatar({ userId, handleAvatarClick }) {
	const { users } = useUsers()

	if (!users) {
		return <p>Loading</p>
	}

	const currentUser = users.find((user) => user.id === userId)

	if (!currentUser) {
		return <p>User not found</p>
	}

	return (
		<Link to={`/user/${currentUser.id}`} onClick={handleAvatarClick}>
			<p
				className='w-9 h-9 text-sm grid place-items-center mx-3 rounded-full'
				style={{ backgroundColor: `${currentUser.favouriteColour}` }}
			>
				{`${currentUser.firstName[0]}${currentUser.lastName[0]}`}
			</p>
		</Link>
	)
}
