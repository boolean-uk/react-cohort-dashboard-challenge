import { Link } from "react-router-dom";
import home from '../assets/home.svg'

function HomeButton() {
    return (
        <>
            <li className="button">
                <Link to="/">
                    <div className="wrapper">
                        <img src={home} alt="home"/>
                        <p>Home</p>
                    </div>
                    
                </Link>
            </li>
        </>
    )
}

export default HomeButton;