import Delimeter from "../../../components/Delimeter"

function InputField({ label, type, name, defaultValue, isReqired }) {
  if (isReqired) {
    label += '*'
  }

  return (
    <label className='input-field'>
      {label}
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={isReqired}
      />
    </label>
  )
}

function AccountInfo({ firstName, lastName, username, email }) {

  return (
    <div className='account-info'>
      <Delimeter />
      <h2>AccountInfo</h2>
      

      {/* <InputField
        label='First Name'
        type='text'
        name='firstName'
        defaultValue={firstName}
        isReqired={true}
      />

      <InputField
        label='Last Name'
        type='text'
        name='lastName'
        defaultValue={lastName}
        isReqired={true}
      />

      <InputField
        label='Username'
        type='text'
        name='username'
        defaultValue={username}
        isReqired={true}
      />

      <InputField
        label='Email'
        type='email'
        name='email'
        defaultValue={email}
        isReqired={true}
      /> */}
    </div>
  )
}

function Address() {

  return (
    <div className='address'>
      <Delimeter />
      <h2>Address</h2>
    </div>
  )
}

function ContactInfo() {

  return (
    <div className='contact-info'>
      <Delimeter />
      <h2>Contact Info</h2>
    </div>
  )
}

function CompanyInfo() {

  return (
    <div className='company-info'>
      <Delimeter />
      <h2>Company Info</h2>
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

const demoUser = {
  "id": 1,
  "name": "Alex Walker",
  "username": "AWalker",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

export default function ProfileForm({ user }) {
  /** TODO: fetch actual data from url:
   * https://jsonplaceholder.typicode.com/users/${id}
   */

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='profile-form'>
      <div className='row'>
        <AccountInfo />
        <Address />
      </div>

      <div className='row'>
        <ContactInfo />
        <CompanyInfo />
      </div>

      <SaveButton />
    </form>
  )
}