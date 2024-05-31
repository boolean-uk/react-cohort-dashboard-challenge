/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MyContext } from "../../App.jsx";
import "./Profile.css";

export default function Profile({}) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { API_CONTACTS } = useContext(MyContext);

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    companyName: "",
    catchPhrase: "",
    businessStatement: "",
  };

  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    setFormData(state.user);
  }, []);

  function handleFormFieldChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${API_CONTACTS}/${state.user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    const status = response.status;
    if (status == 200) {
      navigate("/");
    }
  }

  return (
    <>
      <div>
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="profile-form">
            <section className="account-section">
              <h2>Account Info</h2>
              <label>
                First Name<sup>*</sup>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormFieldChange}
                  required
                />
              </label>

              <label>
                Last Name<sup>*</sup>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormFieldChange}
                  required
                />
              </label>

              <label>
                Username<sup>*</sup>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleFormFieldChange}
                  required
                />
              </label>

              <label>
                Email<sup>*</sup>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormFieldChange}
                  required
                />
              </label>
            </section>

            <section className="address-section">
              <h2>Address</h2>
              <label>
                Street
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleFormFieldChange}
                />
              </label>

              <label>
                Suite
                <input
                  type="text"
                  name="suite"
                  value={formData.suite}
                  onChange={handleFormFieldChange}
                />
              </label>

              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormFieldChange}
                />
              </label>

              <label>
                Zipcode
                <input
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleFormFieldChange}
                />
              </label>
            </section>

            <section className="contact-section">
              <h2>Contact Info</h2>
              <label>
                Phone<sup>*</sup>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormFieldChange}
                />
              </label>

              <label>
                Website
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleFormFieldChange}
                />
              </label>
            </section>

            <section className="company-section">
              <h2>Company Info</h2>
              <label>
                Name
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleFormFieldChange}
                />
              </label>
              <label>
                Catch Phrase
                <input
                  type="text"
                  name="catchPhrase"
                  value={formData.catchPhrase}
                  onChange={handleFormFieldChange}
                />
              </label>
              <label>
                Business Statement
                <input
                  type="text"
                  name="businessStatement"
                  value={formData.businessStatement}
                  onChange={handleFormFieldChange}
                />
              </label>
            </section>
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
