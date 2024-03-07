import { useContext } from "react";
import "../../../style/layout/menu/MainMenu.css";
import TitleHeaderSvg from "../../icons/TitleHeaderSvg";
import UserIcon from "../../icons/UserIcon";
import { postContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const { user } = useContext(postContext);
    const nav = useNavigate();

    const goToProfile = () => {
        nav("/profile/");
    };
    return (
        <header className="header">
            <div className="main-menu">
                <TitleHeaderSvg />
                <UserIcon
                    firstName={user.firstName}
                    lastName={user.lastName}
                    onClick={goToProfile}
                />
            </div>
        </header>
    );
};

export default MainMenu;
