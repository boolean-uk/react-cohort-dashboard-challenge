import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./NavigationMenu.css"
import HomeButton from "@/assets/home-icon.svg"
import ProfileButton from "@/assets/profile-icon.svg"

const NavigationMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeNavigation, setActiveNavigation] = useState()

    const navigateHome = () => {
        localStorage.setItem("navigationLocation", "Home")
        setActiveNavigation("Home")
        navigate("/")
    }

    const navigateProfile = () => {
        localStorage.setItem("navigationLocation", "Profile")
        setActiveNavigation("Profile")
        navigate("/my-profile")
    }

    useEffect(() => {
        if (location.pathname === "/my-profile") {
            navigateProfile()
        } else {
            navigateHome()

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="navigation-menu">
            <div 
                className={activeNavigation === "Home" 
                    ? "navigation-home-button active" 
                    : "navigation-home-button"
                }
                onClick={() => navigateHome()}
            >
                <img src={HomeButton}/>
                <p>Home</p>
            </div>
            <div 
                className={activeNavigation === "Profile" 
                    ? "navigation-profile-button active" 
                    :"navigation-profile-button"
                }
                onClick={() => navigateProfile()}
            >
                <img src={ProfileButton}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default NavigationMenu