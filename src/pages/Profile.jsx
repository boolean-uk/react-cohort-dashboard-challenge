import { useContext, useState } from 'react'
import { UserContext } from '../app/App'
import ProfileIcon from '../components/profile/ProfileIcon';
import FormComponent from '../components/profile/FormComponent';

function Profile() {
  const { user } = useContext(UserContext);
  const [form, setForm] = useState(user);

  if (!user || !form) {
    return (
      <p> Loading... </p>
    )
  }

  function handleSubmit(event) {
    
  }

  function handleChange(params) {
    
  }

  return (
    <div className="profile-container">
      <header className="profile-header"> Profile </header>
        <div className='form-header'> 
          <div className="profile-icon">
            <ProfileIcon user={user} />
          </div>
          <h1>{`${user.firstName} ${user.lastName}`} </h1> 
        </div>
        
        { form && user &&
        <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
          <section className='info-section account'> 
          <h1> Account info</h1>
          <FormComponent
            name={"First Name"} 
            value={form.firstName}
            onChange={handleChange}
          />

          <FormComponent
            name={"Last Name"} 
            value={form.lasttName}
            onChange={handleChange}
          />

          <FormComponent
            name={"Username"} 
            value={`${form && form.firstName ? form.firstName[0] : 'loading..'}${form && form.lastName ? form.lastName : ''}`}
            // value={`fewf`}
            onChange={handleChange}
          />

          <FormComponent
            name={"Email"} 
            value={form.email}
            onChange={handleChange}
          />
          </section>

          <section className='info-section address'> 
          <h1> Address</h1>
          <FormComponent
            name={"Street"} 
            value={form.street}
            onChange={handleChange}
          />

          <FormComponent
            name={"Suite"} 
            value={"xxxxx"}
            onChange={handleChange}
          />

          <FormComponent
            name={"City"} 
            value={form.city}
            onChange={handleChange}
          />

          <FormComponent
            name={"Zipcode"} 
            value={"11231231"}
            onChange={handleChange}
          />
          </section>

          <section className='info-section contact'> 
          <h1> Contact info</h1>
          <FormComponent
            name={"Phone"} 
            value={"r3254231"}
            onChange={handleChange}
          />

          <FormComponent
            name={"Website"} 
            value={"xxxxx"}
            onChange={handleChange}
          />


          </section>

          <section className='info-section company'> 
          <h1> Company</h1>
          <FormComponent
            name={"Name"} 
            value={"XXXXXX"}
            onChange={handleChange}
          />
          <FormComponent
            name={"Catch Phrase"} 
            value={"FASFASFASFASFA"}
            onChange={handleChange}
          />
          <FormComponent
            name={"Business Statement"} 
            value={"xxxx151x"}
            onChange={handleChange}
          />
          </section>

          <button type="submit" className="profile-button">
          Save
        </button>
      
        </form>

      }          
    </div>
  )
}

export default Profile
