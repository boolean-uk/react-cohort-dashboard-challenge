<<<<<<< HEAD
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App.jsx";
import { updateContact } from "../API/api.js";

function ProfilePage() {
  const { profile, updateProfile } = useContext(AppContext);
  const [localProfile, setLocalProfile] = useState(profile || {});

  useEffect(() => {
    setLocalProfile(profile);
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalProfile((prevState) => ({
      ...prevState,
=======
import { useState, useEffect } from "react";
import { fetchContactById, updateContact } from "../API/api.js";
 
function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    phone: "12345",
    website: "www.example.com",
    jobTitle: "",
    companyName: "Acme Corp",
    catchPhrase: "We mean business!",
    businessStatement: "Innovative solutions for modern challenges.",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const contactId = 1; // Assuming contact ID 1 for the demo
    fetchContactById(contactId)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch user's profile:", error);
        setError("Failed to load profile data. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
>>>>>>> 23056adfe6455c018ed5eaffd32cccae66c05ee8
      [name]: value,
    }));
  };

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(localProfile);
    // Assuming updateContact is an async function
    updateContact(1, localProfile);
  };

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName && firstName.length > 0 ? firstName[0] : "";
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
            style={{ backgroundColor: localProfile.favouriteColour }}
            className="initials-circle large"
          >
            {getInitials(localProfile.firstName, localProfile.lastName)}
          </div>
          <h2>
            {localProfile.firstName} {localProfile.lastName}
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
                value={localProfile.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="input-field"
                type="text"
                name="lastName"
                value={localProfile.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                value={localProfile.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <input
                className="input-field"
                type="text"
                name="jobTitle"
                value={localProfile.jobTitle}
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
                value={localProfile.phone || "12345"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                className="input-field"
                name="website"
                value={localProfile.website || "www.example.com"}
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
                value={localProfile.street}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Suite</label>
              <input
                className="input-field"
                type="text"
                name="suite"
                value={localProfile.suite || "Suite 879"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                className="input-field"
                type="text"
                name="city"
                value={localProfile.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Zipcode</label>
              <input
                className="input-field"
                type="text"
                name="zipcode"
                value={localProfile.zipcode || "90566-7771"}
                onChange={handleInputChange}
              />
            </div>
            <h3>Company Info</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                className="input-field"
                value={localProfile.companyName || "Business Corp"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Catch Phrase</label>
              <input
                className="input-field"
                value={localProfile.catchPhrase || "We mean business!"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Business Statement</label>
              <input
                className="input-field"
                value={
                  localProfile.businessStatement ||
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
=======
  const handleSave = async () => {
    setLoading(true);
    try {
      await updateContact(profile.id, profile);
      // Show success message or handle accordingly
      setLoading(false);
    } catch (error) {
      console.error("Failed to update the profile:", error);
      setError("Failed to update profile. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-title">Profile</h1>
        <div className="initials-circle">KR</div>
      </div>
      <div className="profile-container">
        <div className="profile-section account-info">
          <h3>Account Info</h3>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="input-field"
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="input-field"
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="input-field"
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              className="input-field"
              type="text"
              name="jobTitle"
              value={profile.jobTitle || "N/A"}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="profile-section contact-info">
          <h3>Contact Info</h3>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="input-field"
              type="tel"
              name="phone"
              value={profile.phone || "N/A"}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              className="input-field"
              type="url"
              name="website"
              value={profile.website || "N/A"}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="profile-section address-info">
          <h3>Address</h3>
          <div className="form-group">
            <label>Street</label>
            <input
              className="input-field"
              type="text"
              name="street"
              value={profile.street}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              className="input-field"
              type="text"
              name="city"
              value={profile.city}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="profile-section company-info">
          <h3>Company Info</h3>
          {/* Since the company info is provided as dummy data, input fields are read-only */}
          <div className="form-group">
            <label>Name</label>
            <input
              className="input-field"
              value={profile.companyName}
            />
          </div>
          <div className="form-group">
            <label>Catch Phrase</label>
            <input
              className="input-field"
              value={profile.catchPhrase}
            />
          </div>
          <div className="form-group">
            <label>Business Statement</label>
            <input
              className="input-field"
              value={profile.businessStatement}
            />
          </div>
        </div>
      </div>
      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
>>>>>>> 23056adfe6455c018ed5eaffd32cccae66c05ee8
    </div>
  );
}

export default ProfilePage;
