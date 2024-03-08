import { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./NavigationMenu.css"
import HomeButton from "@/assets/home-icon.svg"
import ProfileButton from "@/assets/profile-icon.svg"
import { userContext } from '@/Utils/contexts'
import NavigationMenuItem from './NavigationMenuItem/NavigationMenuItem'

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
            <NavigationMenuItem 
                activeNavigation={activeNavigation}
                onClickFunc={navigateHome}
                elementIcon={HomeButton}
                elementText={"Home"}
            />
            <NavigationMenuItem 
                activeNavigation={activeNavigation}
                onClickFunc={navigate}
                onClickFuncParams={`/profile/${LoggedInUser.id}`}
                elementIcon={ProfileButton}
                elementText={"Profile"}
            />
        </div>
    )
}

export default NavigationMenu