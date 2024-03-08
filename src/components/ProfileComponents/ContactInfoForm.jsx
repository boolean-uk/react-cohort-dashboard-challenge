import React, { useState } from 'react';



function ContactInfoForm() {

    const [formData, setFormData] = useState({
        phone: '',
        website: '',
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
      <h2>Contact info</h2>
      <form>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input type="utl" id="website" name="website" value={formData.website} onChange={handleChange} />
        </div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default ContactInfoForm
