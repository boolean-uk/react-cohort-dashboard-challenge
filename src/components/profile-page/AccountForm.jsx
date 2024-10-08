import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import '../dashboard/Dashboard.css'
import './ProfileView.css'


export function AccountForm({ formData, handleChange }) {
    
    return (
        <Form>
            <Form.Group className="mb-4">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Job Title*</Form.Label>
                <Form.Control
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="profile-form"
                />
            </Form.Group>
        </Form>

    )
}

AccountForm.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
  };