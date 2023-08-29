import { useState } from "react"
import Delimeter from "../../../components/Delimeter"

function InputField({ label, type, name, formData, isReqired, disabled, handleChange }) {
  if (isReqired && !disabled) {
    label += '*'
  }

  return (
    <label className='input-field'>
      <p>{label}</p>
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
      <h2>Account Info</h2>

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
      <h2>Contact Info</h2>

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
      <h2>Company Info</h2>

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
    console.log('handleSubmit -- formData:', formData)
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
            <p>* Required</p>
            <SaveButton />
          </div>
      }

    </form>
  )
}