import { useContext, useState } from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";
import "../style/UserProfileCSS.css";

export default function UserProfile() {
  const { users, setUsers } = useContext(Context);
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  const [userDetails, setUserDetails] = useState(user);

  if (!user) {
    return <div>User not found</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSave = () => {
    const updatedUsers = users.map(u => u.id === userDetails.id ? userDetails : u);
    setUsers(updatedUsers);
    alert("User details updated successfully!");
  };

  return (
    <div className="user-profile">
      <img src={userDetails.profileImage} alt={`${userDetails.firstName} ${userDetails.lastName}`} className="profile-image" />
      <h1>Edit Profile</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={userDetails.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={userDetails.lastName} onChange={handleChange} />
        </label>
        <label>
          Street:
          <input type="text" name="street" value={userDetails.street} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={userDetails.city} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <input type="text" name="gender" value={userDetails.gender} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
        </label>
        <label>
          Job Title:
          <input type="text" name="jobTitle" value={userDetails.jobTitle} onChange={handleChange} />
        </label>
        <label>
          Latitude:
          <input type="number" name="latitude" value={userDetails.latitude} onChange={handleChange} />
        </label>
        <label>
          Longitude:
          <input type="number" name="longitude" value={userDetails.longitude} onChange={handleChange} />
        </label>
        <label>
          Favourite Colour:
          <input type="color" name="favouriteColour" value={userDetails.favouriteColour} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}
