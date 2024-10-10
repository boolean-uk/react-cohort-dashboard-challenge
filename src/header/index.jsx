import Profile_Icon from "./components/profile_icon"
import Title_Logo from "./components/title_logo"
import { useContext } from "react"
import { userContext } from "../App"
import Up_Right from "./components/up_right"

export default function Header() {

    const {user}=useContext(userContext)
    

    return (
        <div className='cohort_manager_header'>
            <Title_Logo/>
            <Up_Right user={user}/>
            
        </div>
            
        
    )
}
