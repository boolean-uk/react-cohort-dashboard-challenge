import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        city: "",
        street: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
        try {
            let response;
            if (id) {
            response = await axios.get(`${BASE_URL}/contact/${id}`);
            } else {
            response = await axios.get(`${BASE_URL}/contact/1`);
            }
            const userData = response.data;
            setUser(userData);
            setFormData({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            jobTitle: userData.jobTitle,
            city: userData.city,
            street: userData.street,
            });
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
        };

        fetchUserData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.put(
            `${BASE_URL}/contact/${user.id}`,
            formData
        );
        setUser(response.data);
        } catch (error) {
        console.error("Error updating user data:", error);
        }
        window.location.reload();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    return (
      <div className="post-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="jobTitle">Job title:</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                />
              </div>
                <button type="submit">Update Profile</button>
            </form>
          </>
        )}
      </div>
    );
}

export default Profile;
