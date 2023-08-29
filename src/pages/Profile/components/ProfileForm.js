import { useContext, useState } from "react"
import Delimeter from "../../../components/Delimeter"
import DataContext from "../../../DataContext"

function InputField({ label, type, name, formData, isReqired, disabled, handleChange }) {
  if (isReqired && !disabled) {
    label += '*'
  }

  return (
    <label className='input-field'>
      <p className='label-name label-text'>{label}</p>
      <input
        type={type}
        name={name}
        value={formData[name]}
        required={isReqired}
        disabled={disabled}
        onChange={handleChange}
      />
    </label>
  )
}

function AccountInfo({ formData, disabled, handleChange }) {
  return (
    <div className='account-info'>
      <Delimeter />
      <h2>Account info</h2>

      <InputField
        label='First Name'
        type='text'
        name='firstName'
        formData={formData}
        isReqired={true}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Last Name'
        type='text'
        name='lastName'
        formData={formData}
        isReqired={true}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Username'
        type='text'
        name='username'
        formData={formData}
        isReqired={true}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Email'
        type='email'
        name='email'
        formData={formData}
        isReqired={true}
        disabled={disabled}
        handleChange={handleChange}
      />
    </div>
  )
}

function Address({ formData, disabled, handleChange }) {
  return (
    <div className='address'>
      <Delimeter />
      <h2>Address</h2>

      <InputField
        label='Street'
        type='text'
        name='street'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Suite'
        type='text'
        name='suite'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='City'
        type='text'
        name='city'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Zipcode'
        type='text'
        name='zipcode'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />
    </div>
  )
}

function ContactInfo({ formData, disabled, handleChange }) {
  return (
    <div className='contact-info'>
      <Delimeter />
      <h2>Contact info</h2>

      <InputField
        label='Phone'
        type='tel'
        name='phone'
        formData={formData}
        isReqired={true}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Website'
        type='text'
        name='website'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />
    </div>
  )
}

function CompanyInfo({ formData, disabled, handleChange }) {
  return (
    <div className='company-info'>
      <Delimeter />
      <h2>Company info</h2>

      <InputField
        label='Name'
        type='text'
        name='companyName'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Catch Phrase'
        type='text'
        name='catchPhrase'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />

      <InputField
        label='Business Statement'
        type='text'
        name='bs'
        formData={formData}
        isReqired={false}
        disabled={disabled}
        handleChange={handleChange}
      />
    </div>
  )
}

function SaveButton() {
  return (
    <button type='submit' className='save-button'>
      Save
    </button>
  )
}

export default function ProfileForm({ user, readOnly }) {
  const { setUser } = useContext(DataContext)

  const [firstName, lastName] = user.name.split(' ')

  const initialFormData = {
    "firstName": firstName,
    "lastName": lastName,
    "username": user.username,
    "email": user.email,
    "street": user.address.street,
    "suite": user.address.suite,
    "city": user.address.city,
    "zipcode": user.address.zipcode,
    "phone": user.phone,
    "website": user.website,
    "companyName": user.company.name,
    "catchPhrase": user.company.catchPhrase,
    "bs": user.company.bs
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // update logged in user fields
    user.name = `${formData.firstName} ${formData.lastName}`
    user.username = formData.username
    user.email = formData.email
    user.address.street = formData.street
    user.address.suite = formData.suite
    user.address.city = formData.city
    user.address.zipcode = formData.zipcode
    user.phone = formData.phone
    user.website = formData.website
    user.company.name = formData.companyName
    user.company.catchPhrase = formData.catchPhrase
    user.company.bs = formData.bs

    // update resource
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setUser(json))
  }

  return (
    <form onSubmit={handleSubmit} className='profile-form'>
      <div className='row'>
        <AccountInfo
          formData={formData}
          disabled={readOnly}
          handleChange={handleChange}
        />
        <Address
          formData={formData}
          disabled={readOnly}
          handleChange={handleChange}
        />
      </div>

      <div className='row'>
        <ContactInfo
          formData={formData}
          disabled={readOnly}
          handleChange={handleChange}
        />
        <CompanyInfo
          formData={formData}
          disabled={readOnly}
          handleChange={handleChange}
        />
      </div>

      {
        !readOnly &&
          <div className='row'>
            <p className='label-text'>* Required</p>
            <SaveButton />
          </div>
      }

    </form>
  )
}