import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const ContactInfo = ({ handleChange, profileData}) => {
    
    return (
        <Container className="mt-4">
      <h3>Contact info</h3>
      <Form>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text" 
          name="email"
          value={profileData.email} 
          onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Container>
    )

}

export default ContactInfo