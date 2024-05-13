import Logo from "./Logo";
import ProfileImage from "./ProfileImage";

export default function Header({ loggedInUser }) {
    return (
        <header>
            <Logo />
            <ProfileImage loggedInUser={loggedInUser} />
        </header>
    )
}