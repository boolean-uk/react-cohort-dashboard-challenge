import "../../style/layout/Layout.css";
import LeftMenu from "./menu/LeftMenu";
import MainMenu from "./menu/MainMenu";

/* eslint-disable react/prop-types */
const Layout = (props) => {
    return (
        <div className="layout">
            <MainMenu />
            <main className="main">
                <LeftMenu />
                <div className="content">{props.children}</div>
            </main>
        </div>
    );
};

export default Layout;
