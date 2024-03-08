import { useContext } from "react";
import { StyleContext } from "../App";
import Logo from "../assets/Logo"
export default function Header() {
    const { getColorFromInitials } = useContext(StyleContext);

    return (
        <header className="header">
            <div className="logo">
                <Logo />
                
            </div>
            <div className ="profile-pic" style={{ backgroundColor: getColorFromInitials("SH") }}>
                SH
            </div>
        </header>
    )
}
