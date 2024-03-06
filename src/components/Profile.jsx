import { useContext } from "react";
import { AppContext } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const API_URL = "https://boolean-api-server.fly.dev/ssuihko/contact";
  const context = useContext(AppContext);
  const [formData, setFormData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id, context.user.id);
    if (parseInt(id) === parseInt(context.user.id)) {
      setFormData(context.user);
    } else {
      console.log("profID is: ", id);
      const newUser = context.contacts.find(
        (x) => parseInt(x.id) === parseInt(id)
      );
      setFormData(newUser);
    }
  }, [context, id]);

  const handleInputChange = (event) => {
    const { name, type, value } = event.target;
    // console.log("handleInput", name, type, value);

    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  // UPDATE
  const handleUpdateProfile = (formData) => {
    formData.longitude = parseFloat(formData.longitude);
    formData.latitude = parseFloat(formData.latitude);

    let updatedList = context.contacts.map((item) => {
      if (parseInt(item.id) === parseInt(formData.id)) {
        return { ...item, ...formData };
      }
      return item;
    });

    const PUT_URL = API_URL + "/" + formData.id;

    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(PUT_URL, putOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then(() => {
        context.setContacts([...updatedList]);
      })
      .catch((err) => {
        console.log("error occured: ", err);
      });

    setFormData(formData);
  };

  return (
    <div className="dashboard-profile">
      <h1>Profile</h1>
      <div className="dashboard-title">
        <div className="profile-icon-contact">
          {!formData.firstName ? (
            <p></p>
          ) : (
            <div id="profile-icon-id-contact">
              {formData.firstName.charAt(0) + "" + formData.lastName.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="profile-title">
          {formData.firstName + " " + formData.lastName}
        </h3>
      </div>
      <form
        className="profile-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateProfile(formData);
        }}
      >
        <div>
          <h3>Account Info</h3>
          <div>
            <label>First name*</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={`${formData.firstName}`}
              value={formData.firstName ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>Last name*</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder={`${formData.lastName}`}
              value={formData.lastName ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>Gender*</label>
            <input
              id="gender"
              name="gender"
              type="text"
              placeholder={`${formData.gender}`}
              value={`${formData.gender}` ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <div>
          <label>Email*</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder={`${formData.email}`}
            value={formData.email ?? ""}
            onChange={handleInputChange}
          ></input>
        </div>

        <div>
          <h3>Location</h3>
          <div>
            <label>Street*</label>
            <input
              id="street"
              name="street"
              type="text"
              placeholder={`${formData.street}`}
              value={formData.street ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>City*</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder={`${formData.city}`}
              value={formData.city ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>Latitude*</label>
            <input
              id="latitude"
              name="latitude"
              type="text"
              placeholder={`${formData.latitude}`}
              value={formData.latitude ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>Longitude*</label>
            <input
              id="longitude"
              name="longitude"
              type="text"
              placeholder={`${formData.longitude}`}
              value={formData.longitude ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <div>
          <h3>Other Info</h3>

          <div>
            <label>Job Title*</label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              placeholder={`${formData.jobTitle}`}
              value={formData.jobTitle ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>Favorite Color*</label>
            <input
              id="favouriteColour"
              name="favouriteColour"
              type="text"
              placeholder={`${formData.favouriteColour}`}
              value={formData.favouriteColour ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label>Profile Picture*</label>
            <input
              id="profileImage"
              name="profileImage"
              type="text"
              placeholder={`${formData.profileImage}`}
              value={formData.profileImage ?? ""}
              onChange={handleInputChange}
            ></input>
          </div>

          <button type="submit" className="post-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
