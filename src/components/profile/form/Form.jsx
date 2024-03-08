import React, { useContext } from 'react'
import AccountInfo from './AccountInfo'
import Address from './Address'
import CompanyInfo from './CompanyInfo'
import { ProfileContextAPIContext } from '../../../contextAPI/ProfileContextAPI'
import ContactInfo from './ContactInfo'
import '../../../style/profile/form/form.css'

function Form() {

  const {form, setForm} = useContext(ProfileContextAPIContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Click")

}
  
  return (
    <form onSubmit={handleSubmit} className='profile-form-form-container'>
    
      <AccountInfo />
      <Address />
      <ContactInfo />
      <CompanyInfo />
          
      <button type="submit" className='form-submitButton'>Save</button>
    </form>
  )
}

export default Form
