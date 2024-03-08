import React from 'react';

function AddressInfoForm() {
  return (
    <div>
      <h2>Account info</h2>
      <form>
        <div>
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" />
        </div>
        <div>
          <label htmlFor="suite">Suite:</label>
          <input type="text" id="suite" name="suite" />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
        </div>
        <div>
          <label htmlFor="zipcode">Email:</label>
          <input type="text" id="zipcode" name="zipcode" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddressInfoForm
