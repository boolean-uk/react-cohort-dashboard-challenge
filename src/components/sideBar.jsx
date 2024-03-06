import Home from "../assets/home-icon.svg"
import { useContext } from "react";
import { MyContext } from "../App";

function sideBar(){
    
    const context = useContext(MyContext)

    return (
        <nav className="sidebar red">
            <h1>Side bar</h1>
            <button className="sidebar-icons">
                <img src={Home} alt="Home" />
            </button>
            <p>
            <button className="sidebar-icons">
                <img src={context.user.profileImage}/>
            </button>
            </p>

        </nav>
    )
}
export default sideBar