import { Link } from "react-router-dom"
export default function InitialIcon () {
    return (
        <Link to={'/profile'}><p className='bg-green w-9 h-9 text-sm grid place-items-center rounded-full'>WB</p></Link>
    )
}