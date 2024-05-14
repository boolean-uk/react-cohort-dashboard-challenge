import { NavLink } from "react-router-dom";

export default function Aside() {
    return (
        <aside>
            <ul className="aside-ul">
                <NavLink to='/'>
                    <li>
                        <div>
                            <img src="src\assets\home-icon.svg" alt="Home icon" />
                        </div>
                        <p>Home</p>
                    </li>
                </NavLink>

                <li>
                    <div>
                        <img src="src\assets\profile-icon.svg" alt="Profile icon" />
                    </div>
                    <p>Profile</p>
                </li>
            </ul>
        </aside>
    )
}