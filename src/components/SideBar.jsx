import { Link, NavLink } from "react-router-dom"
import Home_icon from "../assets/Home_icon.svg"
import Profile_icon from "../assets/Profile_icon.svg"
// import './left-nav-bar.css'
export default function SideBar() {
	return (
		<>
			<div className='flex flex-col items-center w-full h-64 mt-5'>
				<NavLink to={"/"}  >
				<div className="w-full pl-10 bg-[#e6ebf5] ">
						<img src={Home_icon} alt='' className=' w-11 my-6 mx-4 ' />
				</div>
					</NavLink>
				<div className="w-full pl-10 mt-5 bg-[#e6ebf5] ">
					<NavLink to={"/user/1"}>
						<img src={Profile_icon} alt='' className=' w-11 my-6 mx-4 ' />
					</NavLink>
				</div>
			</div>
		</>
	)
}
// className='w-full h-70 place-content-center bg-[#e6ebf5]'