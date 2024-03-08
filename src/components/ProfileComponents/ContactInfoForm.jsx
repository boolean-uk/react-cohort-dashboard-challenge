import React from 'react';

function ContactInfoForm() {
  return (
    <div>
      <h2>Account info</h2>
      <form>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input type="utl" id="website" name="website" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactInfoForm
