import Pfp from "./subcomponents/profilePicture";
import Logo from "./subcomponents/logo";

function Header() {
    return (
        <>
        <header className="header">
            <Logo/>
            <div className="bandaid-solution"></div>
            <Pfp/>
        </header>
        
        </>
    )
}

export default Header;