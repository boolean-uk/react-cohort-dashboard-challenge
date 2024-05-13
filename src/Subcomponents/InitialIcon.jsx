import { Link } from "react-router-dom"
export default function InitialIcon ( {user} ) {

    return (
        <Link to={'/profile'}><p className='bg-green w-9 h-9 text-sm grid place-items-center rounded-full'>{user ? `${user.firstName[0]}${user.lastName[0]}`: 'WB'}</p></Link>
    )
}