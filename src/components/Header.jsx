import header from "../assets/header.svg"
import ProfileCircle from "./ProfileCircle"
import "../styles/Header.css"


export default function Header({name, id}) {

    return (
        <nav className="header">
            <div className="header-collection">
                <img
                className="header-icon"
                src={header}
                alt="header-logo"/>

                <ProfileCircle
                className="profile-circle"
                name={name}
                colour={"#A2E4B8"}
                id={id} />
            </div>
        </nav>
    )
}