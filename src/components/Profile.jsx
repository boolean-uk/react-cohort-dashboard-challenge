import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

function Profile() {
  const { contactId } = useParams();
  const { contacts, getInitials } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: contacts[contactId]?.firstName || "",
    lastName: contacts[contactId]?.lastName || "",
    email: contacts[contactId]?.email || "",
    street: contacts[contactId]?.street || "",
    city: contacts[contactId]?.city || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/pialoana/contact/${contactId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      // Update the state with the new profile information
      const updatedProfile = await response.json();
      setFormData(updatedProfile);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <h4>Profile</h4>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-author-circle">
            {getInitials(formData.firstName, formData.lastName)}
          </div>
          {formData.firstName} {formData.lastName}
        </div>

        <hr />
        <div className="profile-section">
          <h5>Account Info</h5>
          <form className="profile-info" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button type="submit">Update</button>
          </form>
        </div>

        <div className="profile-section">
          <h5>Address</h5>
          <form className="profile-address">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
