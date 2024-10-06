import { useContext, useEffect, useState } from 'react';
import AccountInfo from './profile/AccountInfo';
import AddressInfo from './profile/AddressInfo';
import ContactInfo from './profile/ContactInfo';
import CompanyInfo from './profile/CompanyInfo';
import { Col, Container, Row } from 'react-bootstrap';
import { ContactContext } from '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

  const [userDetails, setUserDetails] = useState(null);

  const { contacts } = useContext(ContactContext)
  
  const { id } = useParams();

  useEffect(() => {
    const matchingContact = contacts.find(
      (contact) => Number(contact.id) === Number(id))
    if (matchingContact) {
      setUserDetails(matchingContact);
    } else {
      console.error("No user with the provided id was found");
    }
    console.log("triggered")
  }, [id, contacts])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    axios
    .put(`https://boolean-uk-api-server.fly.dev/Ic4rus90/contact/${userDetails.id}`, userDetails)
    .then(res => {
      console.log("Contact updated: ", res.data);
    })
    .catch((err) => {
      console.error("Error updating contact: ", err);
    })
  }
  
  if (!userDetails) {
    return "Loading...";
  }

  return (
    <Container>
      <Row>
        <Col>
          <AccountInfo 
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
        <Col>
          <AddressInfo
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactInfo
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
        <Col>
          <CompanyInfo
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
      </Row>
      <button onClick={handleSubmit}> Submit changes </button>
    </Container>
    )
}

export default Profile