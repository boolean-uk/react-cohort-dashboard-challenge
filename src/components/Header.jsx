import Logo from "../assets/Logo.svg"
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers"

export default function Header() {
	const { currentUser } = useUsers()

	return (
		<div className='flex items-center justify-between px-6 bg-[#000046] h-20 '>
			<img src={Logo} width={256} alt='' />
			<Avatar userId={1} />
		</div>
	)
}
