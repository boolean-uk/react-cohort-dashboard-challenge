import { useContext, useEffect, useState } from "react";
import { ContactContext } from "./App";
import CircleAvatar from "./CircleAvatar";
import "./style/ProfileDetails.css";
import { useParams } from "react-router-dom";
function ProfileDetails() {
  const context = useContext(ContactContext);
  const { contacts, editContact } = context;
  const { id } = useParams();
  const [user, setUser] = useState(contacts.find((u) => u.id == id));

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  }
  function onSave() {
    editContact(user);
  }

  useEffect(() => {
    setUser(contacts.find((u) => u.id == id));
  }, [contacts, id]);
  if (user) {
    return (
      <div className="profile-details">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        <div className="details-container">
          <div className="top-row">
            <CircleAvatar
              backgroundColor={user.favouriteColour}
              initials={user.firstName.charAt(0) + user.lastName.charAt(0)}
            />
            <h2>{user.firstName + " " + user.lastName}</h2>
            <hr />
            <div className="details">
              <h2>Account info</h2>
              <h2>Adress</h2>
              <div>
                <p>First name*</p>
                <input
                  value={user.firstName ? user.firstName : ""}
                  name="firstName"
                  onChange={onChange}
                ></input>
              </div>
              <div>
                <p>Street</p>
                <input
                  value={user.street ? user.street : ""}
                  name="street"
                  onChange={onChange}
                ></input>
              </div>
              <div>
                <p>Last name*</p>
                <input
                  value={user.lastName ? user.lastName : ""}
                  name="lastName"
                  onChange={onChange}
                />
              </div>
              <div>
                <p>Suite</p>
                <input
                  value={user.suite ? user.suite : ""}
                  name="suite"
                  onChange={onChange}
                />
              </div>
              <div>
                <p>Username*</p>
                <input
                  value={user.username ? user.username : ""}
                  name="username"
                  onChange={onChange}
                />
              </div>
              <div>
                <p>City</p>
                <input
                  value={user.city ? user.city : ""}
                  name="city"
                  onChange={onChange}
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  value={user.email ? user.email : ""}
                  name="email"
                  onChange={onChange}
                />
              </div>
              <div>
                <p>Zipcode</p>
                <input
                  value={user.zipcode ? user.zipcode : ""}
                  name="zipcode"
                  onChange={onChange}
                />
              </div>
            </div>
            <hr />
            <div className="details">
              <h2>Contact info</h2>
              <h2>Company info</h2>
              <div>
                <p>Phone*</p>
                <input
                  value={user.phone ? user.phone : ""}
                  name="phone"
                  onChange={onChange}
                ></input>
              </div>
              <div>
                <p>Name</p>
                <input
                  value={user.companyName ? user.companyName : ""}
                  name="companyName"
                  onChange={onChange}
                ></input>
              </div>
              <div>
                <p>Website</p>
                <input
                  value={user.website ? user.website : ""}
                  name="website"
                  onChange={onChange}
                />
              </div>
              <div>
                <p>Catch Phrase</p>
                <input
                  value={user.companyCatchPhrase ? user.companyCatchPhrase : ""}
                  name="companyCatchPhrase"
                  onChange={onChange}
                />
              </div>
              <div></div>
              <div>
                <p>Buisness Statement</p>
                <input
                  value={user.buissnessStatement ? user.buissnessStatement : ""}
                  name="buissnessStatement"
                  onChange={onChange}
                />
              </div>
            </div>
            <button onClick={onSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }
  return <>Loading...</>;
}
export default ProfileDetails;
