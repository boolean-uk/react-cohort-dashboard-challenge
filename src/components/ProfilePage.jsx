import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountInfoForm from './ProfileComponents/AccountInfoForm';
import AddressInfoForm from './ProfileComponents/AddressInfoForm';
import ContactInfoForm from './ProfileComponents/ContactInfoForm';
import CompanyInfoForm from './ProfileComponents/CompanyInfoForm';

function ProfilePage() {


    const [formData, setFormData] = useState()
    const [save, setSave] = useState(false)

    return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/">Go back to Home</Link>
      <AccountInfoForm />
      <AddressInfoForm />
      <ContactInfoForm />
      <CompanyInfoForm />
      {/* Remove Submit in InfoForm Components and add Save button here */}

    </div>
  )
}

export default ProfilePage;
