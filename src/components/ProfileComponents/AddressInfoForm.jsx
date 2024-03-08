import React, { useState } from 'react';

function AddressInfoForm() {

  const [formData, setFormData] = useState({
    street: '',
    suite: '',
    city: '',
    zipcode: ''
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
      <h2>Address</h2>
      <form>
        <div>
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="suite">Suite:</label>
          <input type="text" id="suite" name="suite" value={formData.suite} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode:</label>
          <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} />
        </div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default AddressInfoForm
