import React, { useContext, useEffect } from 'react'
import AccountInfo from './AccountInfo'
import Address from './Address'
import CompanyInfo from './CompanyInfo'
import { ProfileContextAPIContext } from '../../../contextAPI/ProfileContextAPI'
import ContactInfo from './ContactInfo'
import '../../../style/profile/form/form.css'
import { UserContextAPIContext } from '../../../contextAPI/UserContextAPI'
import { HttpRequestsContextAPIContext } from '../../../contextAPI/HttpRequestsContextAPI'
import axios from 'axios'

function Form() {

  const {form, setForm} = useContext(ProfileContextAPIContext)

  const {user, setUser} = useContext(UserContextAPIContext);

  const {baseURLContact} = useContext(HttpRequestsContextAPIContext);

  useEffect(() => {

    setForm({...form, 
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      street: user.street,
    })
  }, [user]);

  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {...user, 
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      street: form.street,
    };


    const fetchData = async () => {
      try {
        const response = await axios.put(baseURLContact + `/${user.id}`, newUser )

        console.log(response.data);
      } catch (error) {
        console.error(error)
      }

    }


    fetchData();
    setUser(newUser);

  
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
