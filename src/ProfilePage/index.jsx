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
      [name]: value,
    }));
  };

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
    </div>
  );
}

export default ProfilePage;
