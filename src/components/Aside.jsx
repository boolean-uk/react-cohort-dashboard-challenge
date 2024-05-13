import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <aside>
            <ul>
                <Link to='/'>
                    <li>
                        <div>
                            <img src="src\assets\home-icon.svg" alt="Home icon" />
                        </div>
                        <p>Home</p>
                    </li>
                </Link>

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