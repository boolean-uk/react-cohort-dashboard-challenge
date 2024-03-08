import React from 'react';

function CompanyInfoForm() {
  return (
    <div>
      <h2>Account info</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="catchphrase">Catchphrase:</label>
          <input type="text" id="catchphrase" name="catchphrase" />
        </div>
        <div>
          <label htmlFor="businessStatement">Business Statement:</label>
          <input type="text" id="businessStatement" name="businessStatement" />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompanyInfoForm
