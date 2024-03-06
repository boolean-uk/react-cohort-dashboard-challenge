import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../utilites/apiRequests";
import { useEffect, useState } from "react";
import { ProfileIcon } from "./General/ProfileIcon";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const { userId } = useParams();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putRequest(`/contact/${userId}`, formData);
  };

  useEffect(() => {
    getRequest(`/contact/${userId}`).then((responseUser) => {
      setUser(responseUser);
      setFormData(responseUser);
    });
  }, [userId]);

  return !user ? (
    <p>Loading user...</p>
  ) : (
    <main>
      <div className="card">
        <div className="user-header">
          <ProfileIcon user={user} />
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
        </div>
        <form>
          <ul>
            <li>
              <label htmlFor="firstName">First name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleInput}
                value={formData.firstName}
              />
            </li>
            <li>
              <label htmlFor="lastName">Last name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleInput}
                value={formData.lastName}
              />
            </li>
            <li>
              <label htmlFor="email">Email*</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
              />
            </li>
            <li>
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                name="gender"
                onChange={handleInput}
                value={formData.gender}
              />
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleInput}
                value={formData.city}
              />
            </li>
          </ul>
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </main>
  );
};
