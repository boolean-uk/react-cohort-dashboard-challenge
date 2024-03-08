import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountInfoForm from './ProfileComponents/AccountInfoForm';
import AddressInfoForm from './ProfileComponents/AddressInfoForm';
import ContactInfoForm from './ProfileComponents/ContactInfoForm';
import CompanyInfoForm from './ProfileComponents/CompanyInfoForm';

function ProfilePage() {


    // const [formData, setFormData] = useState()
    // const [save, setSave] = useState(false)

    const handleSubmit = () => {
        e.preventDefault()
    }

    return (
    <div>
      <h1>Profile</h1>
      {/* <Link to="/">Go back to Home</Link> */}
      <form onSubmit={handleSubmit}>
        <AccountInfoForm />
        <AddressInfoForm />
        <ContactInfoForm />
        <CompanyInfoForm />
        <button type="submit">Save</button>
      </form>
      
      {/* Remove Submit in InfoForm Components and add Submit button here */}

    </div>
  )
}

export default ProfilePage;
