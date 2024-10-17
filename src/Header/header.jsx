import Logo from "../Helper/logo";
import ProfileCircle from "../Helper/profileCircle";

export default function Header() {
    return (
        <div className="headerdiv">
            <div className="centeringLogo">
                <Logo className="logo"/>
            </div>
            <div className="centeringProfileCicle">
                <ProfileCircle initials='aw' />
            </div>
        </div>
    )
}