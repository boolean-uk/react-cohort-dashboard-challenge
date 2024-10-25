import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "./HomeIcon";
import ProfileIcon from "./ProfileIcon";

const SideBar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/"><HomeIcon></HomeIcon></Link>
                </li>
                <li>
                <Link to="/profile"><ProfileIcon></ProfileIcon></Link>
                </li>
            </ul>
        </div>
    );
}
export default SideBar;