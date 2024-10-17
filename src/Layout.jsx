import { useContext, useEffect } from "react";
import Content from "./Content/content";
import Header from "./Header/header";
import { ContentContext } from "./Helper/Contex";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout() {


    return (
        <div className="title">
            <Header className={'header'}/>
            <div className="layout">
                <Sidebar className='sidebar' />
                <Content/>
            </div>
        </div>
    )
}