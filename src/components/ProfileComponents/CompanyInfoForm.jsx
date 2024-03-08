import React, { useState } from 'react';

function CompanyInfoForm() {

    const [formData, setFormData] = useState({
        catchphrase: '',
        businessStatement: '',
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
      <h2>Company info</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="catchphrase">Catchphrase:</label>
          <input type="text" id="catchphrase" name="catchphrase" value={formData.catchphrase} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="businessStatement">Business Statement:</label>
          <input type="text" id="businessStatement" name="businessStatement" value={formData.businessStatement} onChange={handleChange} />
        </div>
        
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default CompanyInfoForm
