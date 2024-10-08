import { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ContactContext } from "../../App";
import { ProfileIcon } from "../header/ProfileIcon";
import '../dashboard/Dashboard.css'


export function PostForm() {
    

    const { signedInUser, fetchPosts} = useContext(ContactContext); 

    const initialFormData = {
        content: "",
        contactId: signedInUser?.id || 0,
        title: ""
    };

    const [formData, setFormData] = useState(initialFormData);


    useEffect(() => {
        if (signedInUser) {
          setFormData((prev) => ({
            ...prev,
            contactId: signedInUser.id, 
          }));
        }
      }, [signedInUser]);

      if (!signedInUser) {
        return "loading...";
    }


    async function handleSubmit(event) {
        event.preventDefault();
  
        
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
        });
           
        await fetchPosts();
        setFormData(initialFormData);
          
      }
  
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

   


    return(
        <Card className="post-form-card">
            <Row className="align-items-center p-0 m-0 ">
                <Col xs="auto" className="p-0 m-0">
                    <ProfileIcon contactId={signedInUser.id}/>
                </Col>
                <Col className="p-0 m-0">
                    <form onSubmit={handleSubmit} className="d-flex">
                    <input
                    type="text"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="form-control flex-grow-1 me-3 ms-2 post-form"
                    placeholder="What's on your mind?"
                    />
                    <button type="submit" className="btn custom-post-button">POST</button>
                    </form>
                </Col>
            </Row>
        </Card>
    )
}