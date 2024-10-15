import { useContext } from "react"
import { LoginContext } from "../App"
import UserIcon from "./UserIcon"
import Logo from "./Logo"

function PageHeader(){
    const {user} = useContext(LoginContext)
    return(
        <header className="header" >
            <Logo/>
            <UserIcon user={user}/>
        </header>
    )
}

export default PageHeader