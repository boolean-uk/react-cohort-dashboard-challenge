import Pfp from "../shared-components/Pfp/profilePicture";
import Logo from "./subcomponents/logo";

export default function Header({ userInfo }) {
    
    return (
        <>
        <header className="header">
            <Logo/>
            <div/>
            <Pfp
                userInfo={userInfo}
            />
        </header>
        
        </>
    )
}

