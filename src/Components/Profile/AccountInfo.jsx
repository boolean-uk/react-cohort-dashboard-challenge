import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TempContext } from "./../../App";

function AccountInfo() {
  const { id } = useParams();
  const { contactData, setCurrentTab, getContacts } = useContext(TempContext);
  const [contact, setContact] = useState({
    firstName: " ",
    lastName: " ",
    gender: "",
    jobTitle: "",
    street: "",
    city: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "",
    profileImage: "",
  });
  const URL = "https://boolean-api-server.fly.dev/Slingreen/contact";

  useEffect(() => {
    if (contactData.find((contact) => contact.id == id) != undefined) {
      setContact(contactData.find((contact) => contact.id == id));
    }
  }, [contactData, id]);

  async function UpdatePerson(id, person) {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    if (!response.ok) {
      throw new Error(
        "Failed to submit form: " + response.status + response.statusText
      );
    }

    getContacts();
  }

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    UpdatePerson(contact.id, contact); // Call your UpdatePerson function with the form data
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstname") {
      setContact({ ...contact, firstName: value });
    }
    if (name === "lastname") {
      setContact({ ...contact, lastName: value });
    }
    if (name === "gender") {
      setContact({ ...contact, gender: value });
    }
    if (name === "email") {
      setContact({ ...contact, email: value });
    }
    if (name === "jobTitle") {
      setContact({ ...contact, jobTitle: value });
    }
    if (name === "street") {
      setContact({ ...contact, street: value });
    }
    if (name === "city") {
      setContact({ ...contact, city: value });
    }
    if (name === "latitude") {
      setContact({ ...contact, latitude: value });
    }
    if (name === "longitude") {
      setContact({ ...contact, longitude: value });
    }
    if (name === "color") {
      setContact({ ...contact, favouriteColour: value });
    }
  };
  return (
    <div className="pageitem">
      <div className="nameSection">
        <div
          className="profileIcon"
          style={{ background: contact.favouriteColour }}
          onClick={() => {
            setCurrentTab("profile");
            navigate(`/profile/${id}`);
          }}
        >
          {` ${contact ? `${contact.firstName[0]}${contact.lastName[0]}` : ""}`}
        </div>
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
      </div>
      <section className="survey__form">
        <form className="accountForm" onSubmit={handleSubmit}>
          <div className="profileSection">
            <h2>Account Info</h2>
            <label>
              <p>First Name</p>
              <input
                onChange={handleChange}
                type="text"
                name="firstname"
                value={contact.firstName}
              />
            </label>
            <label>
              <p>Last Name</p>
              <input
                onChange={handleChange}
                type="text"
                name="lastname"
                value={contact.lastName}
              />
            </label>
            <label>
              <p>Gender</p>
              <input
                onChange={handleChange}
                type="text"
                name="gender"
                value={contact.gender}
              />
            </label>
            <label>
              <p>Email</p>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={contact.email}
              />
            </label>
          </div>
          <div className="profileSection">
            <h2>Adress</h2>

            <label>
              <p>Street</p>
              <input
                onChange={handleChange}
                type="text"
                name="street"
                value={contact.street}
              />
            </label>
            <label>
              <p>City</p>
              <input
                onChange={handleChange}
                type="text"
                name="city"
                value={contact.city}
              />
            </label>
            <label>
              <p>Latitude</p>
              <input
                onChange={handleChange}
                type="number"
                name="latitude"
                value={contact.latitude}
              />
            </label>
            <label>
              <p>Longitude</p>
              <input
                onChange={handleChange}
                type="number"
                name="longitude"
                value={contact.longitude}
              />
            </label>
          </div>
          <div className="profileSection">
            <h2>Other</h2>
            <label>
              <p>Job title</p>
              <input
                onChange={handleChange}
                type="text"
                name="jobTitle"
                value={contact.jobTitle}
              />
            </label>
            <label>
              <p>Favourite Color</p>
              <input
                onChange={handleChange}
                type="color"
                name="color"
                value={contact.favouriteColour}
              />
            </label>
          </div>
          <div className="actionSection">
            <input className="post-btn" type="submit" value="Save" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AccountInfo;
