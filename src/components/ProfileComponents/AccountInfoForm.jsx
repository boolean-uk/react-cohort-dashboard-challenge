import React from 'react';

function AccountInfoForm() {
  return (
    <div>
      <h2>Account info</h2>
      <form>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AccountInfoForm
