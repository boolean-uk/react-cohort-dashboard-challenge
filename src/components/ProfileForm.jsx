import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../App";

export default function ProfileForm({user, selectedUser}) {
  const navigate = useNavigate();
    const { setLoggedInUser } = useContext(appContext);
    const [updatedInfo, setUpdatedInfo] = useState({
      id: selectedUser.id,
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName,
      email: selectedUser.email,
      street: selectedUser.street,
      city: selectedUser.city,
      zipCode: "",
      favouriteColour: selectedUser.favouriteColour,
    });

    function handleSubmit(event) {
        event.preventDefault();
        fetch(
          `https://boolean-uk-api-server.fly.dev/zainabch123/contact/${updatedInfo.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
          }
        )
        if (updatedInfo.id=== 1) {
          setLoggedInUser(updatedInfo);
        }
    }


    function handleInput(event) {
        const { name, value } = event.target;
        setUpdatedInfo({
          ...updatedInfo,
          [name]: value,
        });
    }

    console.log("updated info", updatedInfo)
    
    return (
            <form className="profile-form">
              <div className="account-info">
                <h2>Account Info</h2>
                <label>
                  First Name:
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updatedInfo.firstName}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updatedInfo.lastName}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={updatedInfo.email}
                    onChange={handleInput}
                  ></input>
                </label>
              </div>
              <div className="address-info">
                <h2>Address</h2>
                <label>
                  Street:
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={updatedInfo.street}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={updatedInfo.city}
                    onChange={handleInput}
                  ></input>
                </label>
                <label>
                  Zip Code:
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={90566 - 7771}
                    onChange={handleInput}
                  ></input>
                </label>
                <div className="profile-submit">
                  <button className="profile-button" type="submit" onClick={function() {
                    handleSubmit(event)
                    navigate("/")
                  }}>
                    Save
                  </button>
                </div>
              </div>
            </form>
    )
}