import Pfp from "../shared-components/Pfp/profilePicture";
import Logo from "./subcomponents/logo";

function Header() {
    return (
        <>
        <header className="header">
            <Logo/>
            <div/>
            <Pfp/>
        </header>
        
        </>
    )
}

export default Header;