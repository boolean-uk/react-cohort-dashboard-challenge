import { Container,  Navbar } from "react-bootstrap";
import './Header.css'
import Logo from '../../../_assets/logo.svg';
import { ProfileIcon } from "./ProfileIcon";
import { useContext } from "react";
import { ContactContext } from "../../App";

export function Header() {

  const {signedInUser} = useContext(ContactContext);

  if(!signedInUser){
    return("loading...")
}
    return(
        <Navbar variant="dark" expand="lg" className="py-2 bg-header">
            <Container fluid>
              <Navbar.Brand>
                <img src={Logo} alt="Logo" className="logo-style" /> 
              </Navbar.Brand>
              <ProfileIcon contactId={signedInUser.id}/>
            </Container>
          </Navbar>
    )
}