import { Link } from "react-router-dom";
import Logo from "./Logo";
import ProfileImage from "./ProfileImage";

export default function Header({ loggedInUser }) {
    return (
        <header>
            <Link to='/'><Logo /></Link>
            <ProfileImage loggedInUser={loggedInUser} />
        </header>
    )
}