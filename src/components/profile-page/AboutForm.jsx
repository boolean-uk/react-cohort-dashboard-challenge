import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import '../dashboard/Dashboard.css'
import './ProfileView.css'


export function AboutForm({ formData, handleChange }) {
    
    return (
        <Form>
            <Form.Group className="mb-4">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Street</Form.Label>
                <Form.Control
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Favorite Colour</Form.Label>
                <Form.Control
                    type="text"
                    name="favouriteColour"
                    value={formData.favouriteColour}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>
        </Form>

    )
}

AboutForm.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
  };