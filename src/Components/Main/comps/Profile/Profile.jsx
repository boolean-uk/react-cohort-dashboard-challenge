import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../../App.jsx";

export default function Profile() {
  const [profileUser, setProfileUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const { users } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const theUser = users.find(
      (useritem) => Number(useritem.id) === Number(id)
    );
    if (theUser) {
      setProfileUser({ ...theUser, profileUser });
    }
  }, [id, users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Update the fields
    if (firstName) {
      profileUser.firstName = firstName;
    }
    if (lastName) {
      profileUser.lastName = lastName;
    }
    if (street) {
      profileUser.street = street;
    }
    if (city) {
      profileUser.city = city;
    }
    if (email) {
      profileUser.email = email;
    }

    fetch(`https://boolean-api-server.fly.dev/knutsr0501/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileUser),
    });
    console.log(profileUser);
  };
  const handleChange = () => {};
  return (
    <>
      {profileUser ? (
        <div className="profile-container">
          <h2 className="profile-h2">Profile</h2>

          <div className="profile">
            <h2>
              {profileUser.firstName} {profileUser.lastName}
            </h2>

            <form>
              <div className="account-address-container">
                <div className="account-info">
                  <h3>Account info</h3>
                  <br></br>
                  <label htmlFor="first">First name: </label>
                  <input
                    type="text"
                    id="first"
                    name="first"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="last">Last name: </label>
                  <input
                    type="text"
                    id="last"
                    name="last"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value="profileperson99"
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="address-info">
                  <h3>Adress info</h3>
                  <br></br>
                  <label htmlFor="street">Street: </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={(e) => setStreet(e.target.value)}
                    value={street}
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="suite">Suite: </label>
                  <input
                    type="text"
                    id="suite"
                    name="suite"
                    onChange={handleChange}
                    value="Suitest room"
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="city">City: </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="zipcode">Zipcode: </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    onChange={handleChange}
                    value="443-334"
                  />
                </div>
              </div>
              <div className="contact-company-container">
                <div className="contact-info">
                  <h3>Contact info</h3>
                  <br></br>
                  <label htmlFor="phone">Phone: </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    value="99999999"
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="website">Website: </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    onChange={handleChange}
                    value="website.com"
                  />
                </div>
                <div className="company-info">
                  <h3>Company info</h3>
                  <br></br>
                  <label htmlFor="companyName">Name: </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    onChange={handleChange}
                    value="Companyyy"
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="companyPhrase">Catch phrase: </label>
                  <input
                    type="text"
                    id="companyPhrase"
                    name="companyPhrase"
                    onChange={handleChange}
                    value="We are the best"
                  />
                  <br></br>
                  <br></br>
                  <label htmlFor="statement">Business statement: </label>
                  <input
                    type="text"
                    id="statement"
                    name="statement"
                    onChange={handleChange}
                    value="We will rise to the top"
                  />
                  <button onClick={handleSubmit}>Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p>Loading profile</p>
      )}
    </>
  );
}
