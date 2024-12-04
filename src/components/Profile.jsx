import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../App";

// components
import Avatar from "./Avatar";
import TextInput from "./TextInput";

// icons
import editIcon from "../assets/icons/edit.svg";

export default function Profile() {
  const [user, setUser] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState("");
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  const navigate = useNavigate();

  const { mode, contacts, setContacts } = useContext(DataContext);

  const params = useParams();
  const contactId = params.id;
  const fetchUrl = `${baseUrl}/contact/${contactId}`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setUser(data);
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setGender(data.gender ? data.gender : "Not available");
          setJobTitle(data.jobTitle ? data.jobTitle : "Not available");
          setStreet(data.street);
          setCity(data.city);
          setEmail(data.email ? data.email : "Not available");
        }
      })
      .catch((error) => console.error(error));

    setShowSaveBtn(false);
  }, [fetchUrl, contacts]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!firstName) {
      setValidation("First Name is required.");
      return;
    } else if (!lastName) {
      setValidation("Last Name is required.");
      return;
    } else if (!street) {
      setValidation("Street is required.");
      return;
    } else if (!city) {
      setValidation("City is required.");
      return;
    } else {
      setValidation("");
    }

    fetch(fetchUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        jobTitle,
        street,
        city,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setContacts([...contacts, data]);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className={`profile-container ${mode}`}>
      <h1 className="profile-heading">Profile</h1>

      <div className="profile">
        <div className={`profile-header ${mode}`}>
          <div className="avatar-name-div">
            <Avatar>{user}</Avatar>
            <h2>{user?.firstName + " " + user?.lastName}</h2>
          </div>
          <button
            className="edit-profile-btn"
            onClick={() => setShowSaveBtn(true)}
            title="Edit Profile"
          >
            <img src={editIcon} alt="pen icon" />
          </button>
        </div>

        <form action="" className="profile-form" onSubmit={handleFormSubmit}>
          <div className="account-info">
            <h2>Account info</h2>
            <label htmlFor="first-name" className={mode}>
              First Name*
            </label>
            <TextInput
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="last-name" className={mode}>
              Last Name*
            </label>
            <TextInput
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="gender" className={mode}>
              Gender
            </label>
            <TextInput
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="job-title" className={mode}>
              Job Title
            </label>
            <TextInput
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

          <div className="address">
            <h2>Address</h2>
            <label htmlFor="street" className={mode}>
              Street*
            </label>
            <TextInput
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <label htmlFor="city" className={mode}>
              City*
            </label>
            <TextInput
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="contact-info">
            <h2>Contact info</h2>
            <label htmlFor="contact-info" className={mode}>
              Email
            </label>
            <TextInput
              id="contact-info"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className={`required ${mode}`}>*Required</p>
            <p className="validation-message">{validation}</p>
          </div>

          <div className="save">
            {showSaveBtn && <button className="edit-save-btn">Save</button>}
            {showSaveBtn && (
              <button className="edit-cancel-btn" onClick={() => navigate("/")}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
