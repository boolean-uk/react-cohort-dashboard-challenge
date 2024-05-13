import InitialIcon from "../Subcomponents/InitialIcon"
import { Link } from "react-router-dom"

export default function Header () {
    return (
        <header className='py-2 px-7 bg-cohortBlue flex place-items-center justify-between w-full col-span-2'>
            <img className='h-9' src={'assets/title-header-svg.svg'} />
            <Link to={'/profile'}><InitialIcon /></Link>
        </header>
    )
}