import titleHeader from '../assets/title-header.svg'
import { useContext } from "react"
import { AppContext } from '../App'
import UserCircle from './UserCircle'

function Header() {
    const { user } = useContext(AppContext)

    return(
        <section className="header">
            <img className="titleHeader" src={titleHeader}/>
            <div className="userHeader">
                <UserCircle user={user}/>
            </div>
        </section>
    )
}

export default Header