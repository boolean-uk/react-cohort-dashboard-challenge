import Pfp from "./subcomponents/profilePicture";
import Logo from "./subcomponents/logo";

function Header() {
    return (
        <>
        <header className="header">
            <Logo/>
            <Pfp/>
        </header>
        
        </>
    )
}

export default Header;