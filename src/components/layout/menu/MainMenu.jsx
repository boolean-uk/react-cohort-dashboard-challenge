import "../../../style/layout/menu/MainMenu.css";
import TitleHeaderSvg from "../../icons/TitleHeaderSvg";
import UserIcon from "../../icons/UserIcon";

const MainMenu = () => {
    return (
        <header className="header">
            <div className="main-menu">
                <TitleHeaderSvg />
                <UserIcon firstName={"Gudbrand"} lastName={"Dynna"} />
            </div>
        </header>
    );
};

export default MainMenu;
