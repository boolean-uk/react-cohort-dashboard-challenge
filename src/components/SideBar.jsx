import { Link, NavLink } from "react-router-dom"
import Home_icon from "../assets/Home_icon.svg"
import Profile_icon from "../assets/Profile_icon.svg"
// import './left-nav-bar.css'
export default function SideBar() {
	return (
		// <nav className='flex flex-col w-28 h-full'>
		<nav className='flex size-full flex-col justify-start items-center border-2 '>
			<Link to={"/"}>
				<button className='p-7 grid place-items-center w-max pr-18 focus:bg-[#e6ebf5]'>
					<img src={Home_icon} className='h-6 mb-2'  />
					<p className='text-cohortBlue font-medium'>Home</p>
				</button>
			</Link>
			<Link to={"/profile/1"}>
				<button className='p-7 grid place-items-center w-max focus:bg-[#e6ebf5]'>
					<img src={Profile_icon} className='h-6 mb-2'  />
					<p className='text-cohortBlue font-medium'>Profile</p>
				</button>
			</Link>
		</nav>
	)
}
// className='w-full h-70 place-content-center bg-[#e6ebf5]'
// <>
// 	<div className='flex flex-col items-center w-full h-full mt-5'>
// 		<NavLink to={"/"}  >
// 		<div className="w-full pl-10 bg-[#e6ebf5] ">
// 				<img src={Home_icon} alt='' className=' w-11 my-6 mx-4 ' />
// 		</div>
// 			</NavLink>
// 		<div className="w-full pl-10 mt-5 bg-[#e6ebf5] ">
// 			<NavLink to={"/user/1"}>
// 				<img src={Profile_icon} alt='' className=' w-11 my-6 mx-4 ' />
// 			</NavLink>
// 		</div>
// 	</div>
// </>
