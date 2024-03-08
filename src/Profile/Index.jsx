import { UserContext } from "../App";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import "./styles/style.css";

export default function Profile() {
  const { setUsers, users, activeUser, setActiveUser } =
    useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    users.find((user) => user.id === parseInt(id))
  );
  const [disabled] = useState(activeUser.id !== user.id);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://boolean-api-server.fly.dev/SanderSaether/contact/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setUsers([...users.filter((u) => u.id !== user.id), user]);
        setActiveUser(user);
        navigate(`/`);
      });
  };
  return (
    <div className="profile">
      <div className="profile-type">
        <h1>Profile</h1>
      </div>
      <div className="profile-container-form">
        <div className="profile-header">
          <div
            className="create-post-profile profile-header-image"
            style={{
              backgroundColor: user.favouriteColour,
            }}>
            <h2>
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </h2>
          </div>
          <div className="profile-header-info">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </div>
        </div>
        <form
          className="profile-container-form-content"
          onSubmit={handleSubmit}>
          <div className="form-content-container">
            <hr />
            <h2>Account info</h2>
            <label htmlFor="firstName">First name*</label>
            <input
              type="text"
              id="firstName"
              value={user.firstName}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            />
            <label htmlFor="lastName">Last name*</label>
            <input
              type="text"
              id="lastName"
              value={user.lastName}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
            />
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={user.email}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div className="form-content-container">
            <hr />
            <h2>Adress</h2>
            <label htmlFor="street"> Street</label>
            <input
              type="text"
              id="street"
              value={user.street}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, street: e.target.value });
              }}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={user.city}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, city: e.target.value });
              }}
            />
            <label htmlFor="latidue">Latitude</label>
            <input
              type="text"
              id="latitude"
              value={user.latitude}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, latitude: e.target.value });
              }}
            />
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="longitude"
              value={user.longitude}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, longitude: e.target.value });
              }}
            />
          </div>
          <div className="form-content-container">
            <hr />
            <h2>General Information</h2>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              value={user.gender}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, gender: e.target.value });
              }}
            />
            <label htmlFor="favouriteColour">Favourite Colour</label>
            <input
              type="color"
              id="favouriteColour"
              value={user.favouriteColour}
              disabled={disabled}
              onChange={(e) => {
                setUser({ ...user, favouriteColour: e.target.value });
              }}
            />
          </div>
          <div className="form-content-container">
            {!disabled && <button type="submit">Save</button>}
          </div>
        </form>
      </div>
    </div>
  );
}