import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import ProfileAvatar from "../ProfileAvatar";

export default function ViewProfile() {
  const [currentUser, setCurrentUser] = useState(null);
  const users = useContext(DataContext).users;
  const setUsers = useContext(DataContext).setUsers;
  const setPosts = useContext(DataContext).setPosts;
  const posts = useContext(DataContext).posts;

  const { id } = useParams();

  useEffect(() => {
    if (users) {
      setCurrentUser(users.find((u) => u.id === Number(id)));
    }
  }, [users, id]);

  function handleChange(event) {
    setCurrentUser({ ...currentUser, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      "https://boolean-api-server.fly.dev/pkekkonen/contact/" + currentUser.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUsers(
          users.map((u) => (u.id === responseData.id ? responseData : u))
        );
        setPosts(
          posts.map((p) =>
            p.contactId === responseData.id ? { ...p, user: responseData } : p
          )
        );
      });
  };

  return (
    <div className="profile">
      <h1 > Profile</h1>
      {currentUser && (
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="header">
            <ProfileAvatar user={currentUser} className="circle form-avatar" />
            <h2>{currentUser.firstName + " " + currentUser.lastName}</h2>
          </div>
          <div className="grid">
            <div className="first-column">
              <div className="first-row">
                <h3>Personal info</h3>
                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="firstName">First name: </label>
                  </div>
                  <input
                    type="text-area"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={currentUser.firstName}
                  />
                </div>
                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="lastName">Last name: </label>
                  </div>
                  <input
                    type="text-area"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={currentUser.lastName}
                  />
                </div>
                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="gender">Gender: </label>
                  </div>
                  <input
                    type="text-area"
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={currentUser.gender}
                  />
                </div>
                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="email">Email: </label>
                  </div>
                  <input
                    type="text-area"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={currentUser.email}
                  />
                </div>
              </div>
              <div className="second-row">
                <h3>Other</h3>

                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="jobTitle">Job title: </label>
                  </div>
                  <input
                    type="text-area"
                    id="jobTitle"
                    name="jobTitle"
                    onChange={handleChange}
                    value={currentUser.jobTitle}
                  />
                </div>
              </div>
            </div>
            <div className="second-column">
              <div className="first-row">
                <h3>Address</h3>
                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="street">Street: </label>
                  </div>
                  <input
                    type="text-area"
                    id="street"
                    name="street"
                    onChange={handleChange}
                    value={currentUser.street}
                  />
                </div>
                <div className="label-and-input">
                  <div className="label">
                    <label htmlFor="city">City: </label>
                  </div>
                  <input
                    type="text-area"
                    id="city"
                    name="city"
                    onChange={handleChange}
                    value={currentUser.city}
                  />
                </div>
              </div>
              <div className="second-row"></div>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}
