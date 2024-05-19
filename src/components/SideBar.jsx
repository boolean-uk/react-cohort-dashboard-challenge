import { Link } from "react-router-dom"
import Home_icon from "../assets/Home_icon.svg"
import Profile_icon from "../assets/Profile_icon.svg"
export default function SideBar() {
	return (
		// <nav className='flex flex-col w-28 h-full'>
		<nav className='flex size-full flex-col justify-start items-center border-2 '>
			<Link to={"/"}>
				<button className='p-7 grid place-items-center w-max pr-18 focus:bg-[#e6ebf5]'>
					<img src={Home_icon} className='h-6 mb-2' />
					<p className='text-cohortBlue font-medium'>Home</p>
				</button>
			</Link>
			<Link to={"/profile/1"}>
				<button className='p-7 grid place-items-center w-max focus:bg-[#e6ebf5]'>
					<img src={Profile_icon} className='h-6 mb-2' />
					<p className='text-cohortBlue font-medium'>Profile</p>
				</button>
			</Link>
		</nav>
	)
}
