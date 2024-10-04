import { Link, useNavigate } from "react-router-dom"
import Logo from '../assets/header.svg'
import { useContext } from "react"
import { AppContext } from "../App"

function Header() {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate(`/profile/${user.id}`)
    }

    return (
        <>
        <header className="Header">
            <Link to='/'>
                <img className="Logo" src={Logo} />
            </Link>
            <button 
            className="UserIcon-Header" 
            onClick={handleButtonClick}
            style={{ backgroundColor: user.favouriteColour }}
            >{user.firstName ? user.firstName[0] : ''}{user.firstName ? user.lastName[0] : ''}</button>
        </header>
        </>
    )
}

export default Header