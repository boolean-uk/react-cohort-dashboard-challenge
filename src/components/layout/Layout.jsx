import LeftMenu from "./LeftMenu";
import MainMenu from "./MainMenu";

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