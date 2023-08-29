import { useContext } from "react";
import MenuButton from "./MenuButton";
import DataContext from "../DataContext";

export default function Menu() {
    const { tabs } = useContext(DataContext)

    return (
        <ul className="menu">
            {tabs.map(tab => {
                return <MenuButton key={tab.id} tab={tab} tabs={tabs}/>
            })}
        </ul>
    )
}