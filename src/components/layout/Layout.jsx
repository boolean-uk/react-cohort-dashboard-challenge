import "../../style/layout/Layout.css";
import LeftMenu from "./menu/LeftMenu";
import MainMenu from "./menu/MainMenu";

/* eslint-disable react/prop-types */
//height: 90vh
const Layout = (props) => {
    return (
        <div className="layout">
            <MainMenu />
            <main className="main">
                <LeftMenu />
                {props.children}
            </main>
        </div>
    );
};

export default Layout;
