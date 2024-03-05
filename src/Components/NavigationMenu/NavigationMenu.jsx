import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./NavigationMenu.css"
import HomeButton from "@/assets/home-icon.svg"
import ProfileButton from "@/assets/profile-icon.svg"

const NavigationMenu = () => {
    const [activeNavigation, setActiveNavigation] = useState("Home")
    const navigate = useNavigate()

    const NavigateHome = () => {
        setActiveNavigation("Home")
        navigate("/")
    }

    const NavigateProfile = () => {
        setActiveNavigation("Profile")
        navigate("/my-profile")
    }

    return (
        <div className="navigation-menu">
            <div 
                className={activeNavigation === "Home" 
                    ? "navigation-home-button active" 
                    : "navigation-home-button"
                }
                onClick={() => NavigateHome()}
            >
                <img src={HomeButton}/>
                <p>Home</p>
            </div>
            <div 
                className={activeNavigation === "Profile" 
                    ? "navigation-profile-button active" 
                    :"navigation-profile-button"
                }
                onClick={() => NavigateProfile()}
            >
                <img src={ProfileButton}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default NavigationMenu