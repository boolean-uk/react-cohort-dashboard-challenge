import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import { fetchContactById, updateContact } from "../API/api.js";

function UserProfilePage() {
  const { userId } = useParams(); // Assuming you're using react-router and user IDs in the URL
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const fetchedUserProfile = await fetchContactById(userId);
        setUserProfile(fetchedUserProfile);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming updateContact is an async function
    updateContact(userId, userProfile).catch((error) => {
      console.error("Failed to update user profile:", error);
    });
  };

    const getInitials = (firstName, lastName) => {
      const firstInitial =
        firstName && firstName.length > 0 ? firstName[0] : "";
      const lastInitial = lastName && lastName.length > 0 ? lastName[0] : "";
      return `${firstInitial}${lastInitial}`;
    };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Profile</h1>
      </div>
      <form className="profile-content" onSubmit={handleSubmit}>
        <div className="profile-info-header">
          <div
            style={{ backgroundColor: userProfile.favouriteColour }}
            className="initials-circle large"
          >
            {getInitials(userProfile.firstName, userProfile.lastName)}
          </div>
          <h2>
            {userProfile.firstName} {userProfile.lastName}
          </h2>
        </div>
        <div className="profile-body">
          <div className="left-column">
            <h3>Account Info</h3>
            <div className="form-group">
              <label>First Name</label>
              <input
                className="input-field"
                type="text"
                name="firstName"
                value={userProfile.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="input-field"
                type="text"
                name="lastName"
                value={userProfile.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                value={userProfile.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <input
                className="input-field"
                type="text"
                name="jobTitle"
                value={userProfile.jobTitle}
                onChange={handleInputChange}
              />
            </div>
            <h3>Contact Info</h3>
            <div className="form-group">
              <label>Phone</label>
              <input
                className="input-field"
                type="tel"
                name="phone"
                value={userProfile.phone || "12345"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                className="input-field"
                name="website"
                value={userProfile.website || "www.example.com"}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="right-column">
            <h3>Address</h3>
            <div className="form-group">
              <label>Street</label>
              <input
                className="input-field"
                type="text"
                name="street"
                value={userProfile.street}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Suite</label>
              <input
                className="input-field"
                type="text"
                name="suite"
                value={userProfile.suite || "Suite 879"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                className="input-field"
                type="text"
                name="city"
                value={userProfile.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Zipcode</label>
              <input
                className="input-field"
                type="text"
                name="zipcode"
                value={userProfile.zipcode || "90566-7771"}
                onChange={handleInputChange}
              />
            </div>
            <h3>Company Info</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                className="input-field"
                value={userProfile.companyName || "Business Corp"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Catch Phrase</label>
              <input
                className="input-field"
                value={userProfile.catchPhrase || "We mean business!"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Business Statement</label>
              <input
                className="input-field"
                value={
                  userProfile.businessStatement ||
                  "Innovative solutions for modern challenges."
                }
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button className="save-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserProfilePage;