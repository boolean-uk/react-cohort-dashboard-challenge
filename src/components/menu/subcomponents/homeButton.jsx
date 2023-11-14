import { Link } from "react-router-dom";
import home from '../assets/home.svg'

function HomeButton() {
    return (
        <>
        <Link to="/">
            <li className="button">
                    <div className="wrapper">
                        <img src={home} alt="home"/>
                        <p>Home</p>
                    </div>
                    
            </li>
        </Link>
        </>
    )
}

export default HomeButton;