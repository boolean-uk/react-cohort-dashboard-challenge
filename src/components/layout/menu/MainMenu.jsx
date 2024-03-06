import { useContext } from "react";
import "../../../style/layout/menu/MainMenu.css";
import TitleHeaderSvg from "../../icons/TitleHeaderSvg";
import UserIcon from "../../icons/UserIcon";
import { postContext } from "../../../App";

const MainMenu = () => {
    const { user } = useContext(postContext);
    return (
        <header className="header">
            <div className="main-menu">
                <TitleHeaderSvg />
                <UserIcon firstName={user.firstName} lastName={user.lastName} />
            </div>
        </header>
    );
};

export default MainMenu;
