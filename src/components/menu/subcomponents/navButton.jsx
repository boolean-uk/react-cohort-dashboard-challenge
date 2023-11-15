import { Link } from "react-router-dom";

function NavButton({name, link, icon}) {
    return (
        <>
        <Link to={link}>
            <li className="button">
                <div className="wrapper">
                    <img src={icon} alt={name}/>
                    <p>{name}</p>
                </div>
            </li>
        </Link>
        </>
    )
}

export default NavButton;