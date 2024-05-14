import { Link } from "react-router-dom"

export default function NavAside () {
    return (
        <nav className='flex flex-col w-28 h-full'>
            <Link to={'/'}><button className='p-7 grid place-items-center'><img className='h-6' src="/assets/home-icon-svg.svg"/>Home</button></Link>
            <Link to={'/profile/1'}><button className='p-7 grid place-items-center'><img className='h-6' src="/assets/profile-icon-svg.svg"/>Profile</button></Link>
        </nav>
    )
}