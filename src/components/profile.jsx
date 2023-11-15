import React, { useState } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [businessStatement, setBusinessStatement] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleSuiteChange = (event) => {
    setSuite(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCatchPhraseChange = (event) => {
    setCatchPhrase(event.target.value);
  };

  const handleBusinessStatementChange = (event) => {
    setBusinessStatement(event.target.value);
  };

  
  // Other change handler functions for inputs

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Data:', {
      firstName,
      lastName,
      username,
      email,
      street,
      suite,
      city,
      zipcode,
      phone,
      website,
      companyName,
      catchPhrase,
      businessStatement,
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Account Info</legend>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
          {/* Other account info inputs */}
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          {/* Address-related inputs */}
        </fieldset>

        <fieldset>
          <legend>Contact Info</legend>
          {/* Contact-related inputs */}
        </fieldset>

        <fieldset>
          <legend>Company Info</legend>
          {/* Company-related inputs */}
        </fieldset>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
