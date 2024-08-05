import React, { useState } from "react";

function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    companyName: "",
    catchPhrase: "",
    businessStatement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      {}
      <button type="submit">Save</button>
    </form>
  );
}

export default ProfileForm;
