import Delimeter from "../../../components/Delimeter"

function InputField({ label, type, name, defaultValue, isReqired }) {
  if (isReqired) {
    label += '*'
  }

  return (
    <label className='input-field'>
      <p>{label}</p>
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
      <h2>Account Info</h2>

      <InputField
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
      />
    </div>
  )
}

function Address({ street, suite, city, zipcode }) {

  return (
    <div className='address'>
      <Delimeter />
      <h2>Address</h2>

      <InputField
        label='Street'
        type='text'
        name='street'
        defaultValue={street}
        isReqired={false}
      />

      <InputField
        label='Suite'
        type='text'
        name='suite'
        defaultValue={suite}
        isReqired={false}
      />

      <InputField
        label='City'
        type='text'
        name='city'
        defaultValue={city}
        isReqired={false}
      />

      <InputField
        label='Zipcode'
        type='text'
        name='zipcode'
        defaultValue={zipcode}
        isReqired={false}
      />
    </div>
  )
}

function ContactInfo({ phone, website }) {

  return (
    <div className='contact-info'>
      <Delimeter />
      <h2>Contact Info</h2>

      <InputField
        label='Phone'
        type='tel'
        name='phone'
        defaultValue={phone}
        isReqired={true}
      />

      <InputField
        label='Website'
        type='url'
        name='website'
        defaultValue={website}
        isReqired={false}
      />
    </div>
  )
}

function CompanyInfo({ companyName, catchPhrase, bs }) {

  return (
    <div className='company-info'>
      <Delimeter />
      <h2>Company Info</h2>

      <InputField
        label='Name'
        type='text'
        name='companyName'
        defaultValue={companyName}
        isReqired={false}
      />

      <InputField
        label='Catch Phrase'
        type='text'
        name='catchPhrase'
        defaultValue={catchPhrase}
        isReqired={false}
      />

      <InputField
        label='Business Statement'
        type='text'
        name='bs'
        defaultValue={bs}
        isReqired={false}
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
  const [firstName, lastName] = user.name.split(' ')
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='profile-form'>
      <div className='row'>
        <AccountInfo
          firstName={firstName}
          lastName={lastName}
          username={user.username}
          email={user.email}
        />
        <Address
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipcode={user.address.zipcode}
        />
      </div>

      <div className='row'>
        <ContactInfo
          phone={user.phone}
          website={user.website}
        />
        <CompanyInfo
          companyName={user.company.name}
          catchPhrase={user.company.catchPhrase}
          bs={user.company.bs}
        />
      </div>

      <SaveButton />
    </form>
  )
}