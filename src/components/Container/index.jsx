import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import LeftMenu from "./components/LeftMenu"
import "../../assets/css/Container.css"

function Container() {
    return (
        <>
            <Header></Header>
            <div className="LeftMenu-Dashboard-container">
                <LeftMenu></LeftMenu>
                <Dashboard></Dashboard>
            </div>
        </>
    )
}

export default Container
