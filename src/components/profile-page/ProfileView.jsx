
// Account og About me

import { Card, Col, Container, Row } from "react-bootstrap";
import { AccountForm } from "./AccountForm";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../../App";
import { AboutForm } from "./AboutForm";
import { ProfileIcon } from "../header/ProfileIcon";



export function ProfileView (){

    const {contacts, fetchContacts} = useContext(ContactContext);
    const {id} = useParams();

    const account = contacts.find((c) => c.id === parseInt(id));

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        jobTitle: "",
        street: "",
        city: "",
        favouriteColour: ""
    });

    useEffect(() => {
        if (account) {
            setFormData({
                firstName: account.firstName || "",
                lastName: account.lastName || "",
                gender: account.gender || "",
                email: account.email || "",
                jobTitle: account.jobTitle || "",
                street: account.street || "",
                city: account.city || "",
                favouriteColour: account.favouriteColour || ""
            });
        }
    }, [account]);

    async function handleSubmit(event) {
        event.preventDefault();
  
        
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
        });

        await fetchContacts();
           
    }
  
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    };

    return(
        <Container fluid className="d-flex flex-column container">
            <h2 className="profile-name-title">Profile</h2>
             <Card className="p-3 ms-3 me-5">
                <Row className="post-separator align-items-center pb-3 ">
                    <Col xs="auto">
                        <ProfileIcon contactId={parseInt(id)}/>
                    </Col>
                    <Col xs="auto" className="profile-name">
                        {formData.firstName} {formData.lastName}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h4 className="profile-name">Account</h4>
                        <AccountForm formData={formData} handleChange={handleChange} />
                        <button onClick={handleSubmit} className="btn custom-post-button">
                            Save
                        </button>
                    </Col>
                    <Col>
                    <h4 className="profile-name">About Me</h4>
                        <AboutForm formData={formData} handleChange={handleChange}/>
                    </Col>
                </Row>
            </Card>
        </Container>
       
        

    )

}

