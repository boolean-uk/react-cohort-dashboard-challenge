import Home_Button from "./components/home_button"
import Profile_Button from "./components/profile_button"
import { Routes, Route, Link } from "react-router-dom";

export default function Left_Menu() {


    

    return (
        <div className='left_menu'>
            
            <Link to="/home"><Home_Button/></Link>
            <Link to="/profile"><Profile_Button/></Link>
            
            
        </div>
            
        
    )
}
