import React from "react";
import { useState } from "react";

function ProfileAddress() {
  const [profile, setProfile] = useState({});

  const [address, setAddress] = useState({
   street: "",
   suite: "",
   city: "",
   zipCode: "",
  });

  const handleAddress = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
    console.log(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(address)
    setProfile({ ...profile, address});
    console.log("profile:", profile);
  };
  return (
    <>
      <div className="account-address">
        <h3>Address</h3>
        <form>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  id="account-street"
                  name="account-street"
                  placeholder="street name"
                  value={address.street}
                  onChange={handleAddress}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  id="account-suite"
                  name="account-suite"
                  placeholder="suite"
                  value={address.suite}
                  onChange={handleAddress}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  id="account-city"
                  name="account-city"
                  placeholder="city"
                  value={address.city}
                  onChange={handleAddress}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  id="account-zip-code"
                  name="account-zip-code"
                  placeholder="Zip code"
                  value={address.zipCode}
                  onChange={handleAddress}
                />
              </label>
            </li>
          </ul>
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </>
  );
}

export default ProfileAddress;
