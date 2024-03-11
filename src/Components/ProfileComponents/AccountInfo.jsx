import React, { useState } from "react";
//import { ProfileContext } from "./ProfileForm";

function AccountInfo() {
  // const profileContext = useContext(ProfileContext);
  //const [profiles, setProfiles] = useState({})
  const [profile, setProfile] = useState({});
  // const [profile, setProfile] = useState({})
  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  // const [companyInfo, setCompanyInfo] = useState({
  //   companyName: "",
  //   catchPhrase: "",
  //   statement: "",
  // });

  // const [address, setAddress] = useState({
  //   street: "",
  //   suite: "",
  //   city: "",
  //   zipCode: "",
  // });

  // const [contactInfo, setContactInfo] = useState({
  //   phone: "",
  //   website: "",
  // });

  const handleAccountInfo = (event) => {
    const { name, value } = event.target;
    setAccountInfo({ ...accountInfo, [name]: value });
    console.log(value);
  };

  // const handleAddress = (event) => {
  //   const { name, value } = event.target;
  //   setAddress({ ...address, [name]: value });
  //   console.log(value);
  // };

  // const handleCompanyInfo = (event) => {
  //   const { name, value } = event.target;
  //   setCompanyInfo({ ...companyInfo, [name]: value });
  //   console.log(value);
  // };

  // const handleContact = (event) => {
  //   const { name, value } = event.target;
  //   setContactInfo({ ...contactInfo, [name]: value });
  //   console.log(value);
  // };

  const handleFocus = (event) => {
    event.target.placeholder = ""; // Clear placeholder text when focused
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      event.target.placeholder = event.target.getAttribute(
        event.target.placeholder
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setProfile({ ...profile, accountInfo});
    console.log(profile);
  };
  return (
    <>
      <div className="account-info">
        <form>
          <h3>Account Info</h3>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={accountInfo.firstName}
                  onChange={handleAccountInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={accountInfo.lastName}
                  onChange={handleAccountInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={accountInfo.username}
                  onChange={handleAccountInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Name@example.com"
                  value={accountInfo.email}
                  onChange={handleAccountInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
          </ul>
          {/* <h3>Address</h3>
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
          </ul>
          <h3>Contact Info</h3>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  id="account-phone"
                  name="account-phone"
                  placeholder="Phone number"
                  value={contactInfo.phone}
                  onChange={handleContact}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  id="account-website"
                  name="account-website"
                  placeholder="Website"
                  value={contactInfo.website}
                  onChange={handleContact}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
          </ul>
          <h3>Company Info</h3>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  id="account-name"
                  name="account-name"
                  placeholder="Company name"
                  value={companyInfo.companyName}
                  onChange={handleCompanyInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  id="catch-phrase"
                  name="catch-phrase"
                  placeholder="Catch phrase"
                  value={companyInfo.catchPhrase}
                  onChange={handleCompanyInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  id="account-statement"
                  name="account-statement"
                  placeholder="Business statement"
                  value={companyInfo.statement}
                  onChange={handleCompanyInfo}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
            </li>
          </ul> */}
          <button onSubmit={handleSubmit}> Save </button>
        </form>
      </div>
    </>
  );
}

export default AccountInfo;
