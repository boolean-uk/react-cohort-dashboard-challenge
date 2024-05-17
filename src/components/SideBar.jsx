import { Link } from "react-router-dom"
import Home_icon from "../assets/Home_icon.svg"
import Profile_icon from "../assets/Profile_icon.svg"

export default function SideBar() {
	return (
		<div className='flex size-full flex-col justify-start items-center mr-3 border-2 h-full '>
			<Link to={"/"}>
				<img src={Home_icon} alt='' className=' w-11 my-8 mx-4 ' />
			</Link>
			<Link to={"/user/1"}>
				<img src={Profile_icon} alt='' className=' w-11 my-6 mx-4 ' />
			</Link>
		</div>
	)
}
