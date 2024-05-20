import { Link } from "react-router-dom"
import Home_icon from "../assets/Home_icon.svg"
import Profile_icon from "../assets/Profile_icon.svg"

export default function SideBar() {
	return (
		<nav className='flex size-full flex-col items-center gap-2 pt-6 bg-[#fff] border border-stone-400 '>
			<Link to={"/"} className="w-full"  >
				<button className=' grid place-items-center w-full mt-4 p-8 hover:bg-[#e6ebf5] focus:bg-[#e6ebf5]'>
					<img src={Home_icon} className='h-10' />
					<p className='text-cohortBlue font-medium'>Home</p>
				</button>
			</Link>
			<Link to={"/user/1"} className="w-full" >
				<button className='p-7 grid place-items-center w-full hover:bg-[#e6ebf5] focus:bg-[#e6ebf5]'>
					<img src={Profile_icon} className='h-10 mb-2' />
					<p className='text-cohortBlue font-medium'>Profile</p>
				</button>
			</Link>
		</nav>
	)
}
