import React, { useState } from 'react';

function AccountInfoForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = {
             ...formData, [name]: value 
        };
        setFormData(updatedFormData);
        
    };


  return (
    <div>
      <h2>Account info</h2>
      <form>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default AccountInfoForm
