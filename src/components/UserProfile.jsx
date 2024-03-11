import { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const result = await axios(
          "https://boolean-api-server.fly.dev/krzysztofmmm/contact/1"
        );
        setProfile(result.data);
        setUpdatedProfile(result.data); // Initialize updatedProfile with fetched data
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setUpdatedProfile(profile); // Reset changes if cancelled
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://boolean-api-server.fly.dev/krzysztofmmm/contact/1`,
        updatedProfile
      );
      setProfile(updatedProfile); // Update local state with new profile info
      setEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={updatedProfile.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={updatedProfile.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={updatedProfile.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              value={updatedProfile.jobTitle}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Email: {profile.email}</p>
          <p>Job Title: {profile.jobTitle}</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
