import { useNavigate } from 'react-router-dom'
import homeIcon from '../assets/images/home-icon.svg'
import profileIcon from '../assets/images/profile-icon.svg'

export default function NavLinks() {
    const navigate = useNavigate()
    
    return (
        <>
            <figure onClick={() => navigate('/')}>
                <img 
                    src={homeIcon} 
                    alt="Home" 
                />
                <figcaption>Home</figcaption>
            </figure>

            <figure>
                <img 
                    src={profileIcon} 
                    alt="Home" 
                />
                <figcaption>Profile</figcaption>
            </figure>
        </>
    )
}