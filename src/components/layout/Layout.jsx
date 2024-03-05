import LeftMenu from "./menu/LeftMenu";
import MainMenu from "./menu/MainMenu";

/* eslint-disable react/prop-types */
const Layout = (props) => {
    return (
        <>
            <MainMenu />
            <LeftMenu />
            <main className="">{props.children}</main>
        </>
    );
};

export default Layout;
