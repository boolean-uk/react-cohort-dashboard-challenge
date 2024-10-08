import { Col, Nav, Navbar } from "react-bootstrap";
import './SideBar.css'
import HomeIcon from '../../../_assets/home-icon.svg'
import ProfileIcon from '../../../_assets/profile-icon.svg'
import { useContext } from "react";
import { ContactContext } from "../../App";
import { Link } from "react-router-dom";


export function SideBar() {

    const {signedInUser} = useContext(ContactContext);

    if(!signedInUser){
        return "loading...";
    }

    return(
        <Col xs={1} className="p-0 m-0" style={{ height: 'calc(100vh - 140px)'}} >
            <Navbar className="styling-sidebar flex-column text-center h-100">
            <Nav className="flex-column w-100">
                <Nav.Link as={Link} to="/" className="sidebar-button">
                    <img src={HomeIcon} alt="Home" className="styling-icon"/> 
                    <div>Home</div>
                </Nav.Link>
                <Nav.Link as={Link} to={`/account/${signedInUser.id}`}className="sidebar-button">
                    <img src={ProfileIcon} alt="Profile" className="styling-icon"/>
                    <div>Profile</div>
                </Nav.Link>
            </Nav>
            </Navbar>
        </Col>  
    )
}