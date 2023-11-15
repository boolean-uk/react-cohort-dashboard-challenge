import { useState } from 'react';
import InputField from './input-field.jsx'


const Profile = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    businessStatement: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitted Data:', formData);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Account Info */}
        <h2>Account Info</h2>
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Address */}
<h2>Address</h2>
        <InputField
          label="Street"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />

        <InputField
          label="Suite"
          type="text"
          name="suite"
          value={formData.suite}
          onChange={handleChange}
        />
        <InputField
          label="City"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <InputField
          label="Zipcode"
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />



        {/* Contact Info */}
        <h2>Contact Info</h2>

        <InputField
          label="Phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <InputField
          label="Website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />



        {/* Company Info */}
      <h2>Company Info</h2>

        <InputField
          label="Name"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

<InputField
          label="Catch Phrase"
          type="text"
          name="catchPhrase"
          value={formData.catchPhrase}
          onChange={handleChange}
        />

<InputField
          label="Business Statement"
          type="text"
          name="businessStatement"
          value={formData.businessStatement}
          onChange={handleChange}
        />

      

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
