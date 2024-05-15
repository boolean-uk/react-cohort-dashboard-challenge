import { useNavigate } from 'react-router-dom'
import homeIcon from '../assets/images/home-icon.svg'
import profileIcon from '../assets/images/profile-icon.svg'
import { StateContext } from '../App'
import { useContext } from 'react'

export default function NavLinks() {
    const navigate = useNavigate()

    const { randomAuthor } = useContext(StateContext)
    
    return (
        <>
            <figure onClick={() => navigate('/')}>
                <img 
                    src={homeIcon} 
                    alt="Home" 
                />
                <figcaption>Home</figcaption>
            </figure>

            <figure onClick={() => navigate(`/contact/${randomAuthor.id}`)}>
                <img 
                    src={profileIcon} 
                    alt="Home" 
                />
                <figcaption>Profile</figcaption>
            </figure>
        </>
    )
}