import { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./NavigationMenu.css"
import HomeButton from "@/assets/home-icon.svg"
import ProfileButton from "@/assets/profile-icon.svg"
import { userContext } from '@/Utils/contexts'

const NavigationMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeNavigation, setActiveNavigation] = useState()
    const { LoggedInUser } = useContext(userContext)

    const navigateHome = (useNavigate = true) => {
        localStorage.setItem("navigationLocation", "Home")
        setActiveNavigation("Home")
        useNavigate && navigate("/")
    }

    const navigateProfile = () => {
        localStorage.setItem("navigationLocation", "Profile")
        setActiveNavigation("Profile")
    }

    useEffect(() => {
        if (location.pathname.includes("/profile")) {
            navigateProfile()
        } else {
            navigateHome(false)

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

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
                onClick={() => navigate(`/profile/${LoggedInUser.id}`)}
            >
                <img src={ProfileButton}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default NavigationMenu