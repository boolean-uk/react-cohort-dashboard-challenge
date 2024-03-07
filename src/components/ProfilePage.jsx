import PropTypes from "prop-types";
import UserCircle from "./UserCircle";
import { putData } from "../utils/api.js";
import "./ProfilePage.css";
import React, { useState, useEffect } from "react";
import { baseContectURL } from "../utils/urls.js";

function ProfilePage(props) {
  const { user, handleSave } = props;
  const [formValues, setFormValues] = useState(user);

  useEffect(() => {
    setFormValues(user);
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(value);
  };

  const saveProfile = async () => {
    console.log(
      "not implementet but will sav the changes made in the profile: ",
      formValues
    );
    const response = await putData(`${baseContectURL}/${user.id}`, formValues);
    if (response) {
      console.log("Successfully updated profile information!");
      handleSave();
    } else {
      console.error(
        "OBS!!! Something happened trying to update the profile information"
      );
    }
  };

  return (
    <>
      <h1>Profile</h1>
      <div className="blogpost-card">
        <div className="form-header">
          <UserCircle
            userFirstName={user.firstName}
            userLastName={user.lastName}
            userfavouriteColour={user.favouriteColour}
          />
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
        </div>
        <form className="form-form">
          <div className="form-form-grid">
            <h2>Account info</h2>
            {["firstName", "lastName", "gender", "email"].map((field) => (
              // <-- represents <></>
              <React.Fragment key={field}>
                <label>{field}</label>
                <input
                  type="text"
                  placeholder={field}
                  onChange={handleInputChange}
                  value={formValues[field]}
                  name={field}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="form-form-grid">
            <h2>Address</h2>
            {["street", "city"].map((field) => (
              <React.Fragment key={field}>
                <label>{field}</label>
                <input
                  type="text"
                  placeholder={field}
                  onChange={handleInputChange}
                  value={formValues[field]}
                  name={field}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="form-form-grid">
            <h2>Position</h2>
            {["latitude", "longitude"].map((field) => (
              <React.Fragment key={field}>
                <label>{field}</label>
                <input
                  type="text"
                  placeholder={field}
                  onChange={handleInputChange}
                  value={formValues[field]}
                />
              </React.Fragment>
            ))}
            <label>*Required</label>
          </div>
          <div className="form-form-grid">
            <h2>Company info</h2>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => e.target.value}
              value={user.jobTitle}
            />
          </div>
        </form>
        <button onClick={saveProfile}>Save</button>
      </div>
    </>
  );
}

ProfilePage.propTypes = {
  user: PropTypes.object,
  handleSave: PropTypes.func,
};

export default ProfilePage;
