import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostAuthor } from "./PostAuthorContext";

function Profile() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const { contacts, setContacts } = usePostAuthor();

  useEffect(() => {
    if (contacts[id]) {
      setContact(contacts[id]);
    } else {
      fetch(`https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setContacts((prevContacts) => ({ ...prevContacts, [data.id]: data }));
          setContact(data);
        })
        .catch((error) => console.error("Error fetching contact:", error));
    }
  }, [id, contacts, setContacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setContact((prevContact) => ({
        ...prevContact,
        address: {
          ...prevContact.address,
          [addressField]: value,
        },
      }));
    } else if (name.startsWith("company.")) {
      const companyField = name.split(".")[1];
      setContact((prevContact) => ({
        ...prevContact,
        company: {
          ...prevContact.company,
          [companyField]: value,
        },
      }));
    } else {
      setContact((prevContact) => ({
        ...prevContact,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts((prevContacts) => ({ ...prevContacts, [data.id]: data }));
        setContact(data);
      })
      .catch((error) => console.error("Error updating contact:", error));
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-header">
        <div className="profile-initials">
          {contact.firstName && contact.lastName
            ? `${contact.firstName[0]}${contact.lastName[0]}`
            : ""}
        </div>
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-section">
          <h3>Account info</h3>
          <label>
            First Name*
            <input
              type="text"
              name="firstName"
              value={contact.firstName || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name*
            <input
              type="text"
              name="lastName"
              value={contact.lastName || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Username*
            <input
              type="text"
              name="username"
              value={contact.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Email*
            <input
              type="email"
              name="email"
              value={contact.email || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="profile-section">
          <h3>Address</h3>
          <label>
            Street
            <input
              type="text"
              name="address.street"
              value={contact.address?.street || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Suite
            <input
              type="text"
              name="address.suite"
              value={contact.address?.suite || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="address.city"
              value={contact.address?.city || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Zipcode
            <input
              type="text"
              name="address.zipcode"
              value={contact.address?.zipcode || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="profile-section">
          <h3>Contact info</h3>
          <label>
            Phone*
            <input
              type="tel"
              name="phone"
              value={contact.phone || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Website
            <input
              type="url"
              name="website"
              value={contact.website || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="profile-section">
          <h3>Company info</h3>
          <label>
            Name
            <input
              type="text"
              name="company.name"
              value={contact.company?.name || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Catch Phrase
            <input
              type="text"
              name="company.catchPhrase"
              value={contact.company?.catchPhrase || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Business Statement
            <input
              type="text"
              name="company.bs"
              value={contact.company?.bs || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="save-button-container">
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
