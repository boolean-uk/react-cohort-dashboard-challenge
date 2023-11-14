/* eslint-disable no-undef */
import { useState, useEffect } from "react"

function OwnerProfile() {
    const [profileDetails, setProfileDetails] = useState({})
   



const getOwnerProfileContact = () => {
    fetch('https://boolean-api-server.fly.dev/Usamaibrahim33%20/contact/1')
      .then((response) => response.json())
      .then((data) =>  {
        console.log('contact data', data)
        setProfileDetails(data)
    })
}


    const UpdateDetails = () => {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(profileDetails)
        }


        fetch('https://boolean-api-server.fly.dev/Usamaibrahim33%20/contact/1', options)
          .then((response) => response.json())
          .then((data) => console.log('data posted',data))
          .catch((error) => console.log(error))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        UpdateDetails()
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };


useEffect(() => {
    getOwnerProfileContact()
}, [])



    return (
        <>
        <div className="ownersProfile">
            <div className="profilehead">
            <h1> Profile </h1>
            </div>

            <form className="ownerProfileform" onSubmit={handleSubmit}> 
       
            <div className='EachMain-content profilename'>
                    <div>
                        <p className=' commentcircle'>us</p>
                    </div>

                    <div className="profileownername">
                       <h3>USAMMA IBRAHIM</h3>
                    </div>
                   
                </div>  


              

                <div className="formaccount">
                   <h1>
                    Account
                    </h1> 

                    <label htmlFor="firstName">
                        First Name* <br />
                        <input type="text" name="firstName" value={profileDetails.firstName} onChange={(event) => handleChange(event)} /> 
                    </label> <br />

                    <label htmlFor="firstName">
                        Last Name* <br />
                        <input type="text" name="lastName" value={profileDetails.lastName} onChange={(event) => handleChange(event)} />
                    </label> <br />


                    <label htmlFor="firstName">
                         Username* <br />
                        <input type="text" name="username" value={profileDetails.username} onChange={(event) => handleChange(event)} /> 
                    </label> <br />


                    <label htmlFor="firstName">
                        Email* <br />
                        <input type="text" name="email" value={profileDetails.email} onChange={(event) => handleChange(event)} /> 
                    </label> <br />

                    <h1> Contact Info</h1>
                    <label htmlFor="firstName">
                         Phone Number* <br />
                        <input type="text" name="phone" value={profileDetails.phone} onChange={(event) => handleChange(event)} /> 
                    </label> <br />


                    <label htmlFor="firstName">
                        Website* <br />
                        <input type="text"  name="email" value={profileDetails.email} onChange={(event) => handleChange(event)} /> 
                    </label> <br />
                </div>


                <div className="formaddress">
                    <h1> Address </h1>
                    <label htmlFor="firstName">
                        Street* <br />
                        <input type="text"name="street" value={profileDetails.street} onChange={(event) => handleChange(event)} /> 
                    </label> <br />

                    <label htmlFor="firstName">
                        Suite* <br />
                        <input type="text" name="suite" value={profileDetails.suite}  onChange={(event) => handleChange(event)} />
                    </label> <br />


                    <label htmlFor="firstName">
                        City* <br />
                        <input type="text" name="city" value={profileDetails.city} onChange={(event) => handleChange(event)} /> 
                    </label> <br />


                    <label htmlFor="firstName">
                        Zip Code* <br />
                        <input type="text" name="postcode" value={profileDetails.postcode}  onChange={(event) => handleChange(event)}/> 
                    </label> <br />

                    <h1> Company Info</h1>
                    <label htmlFor="firstName">
                        Name* <br />
                        <input type="text" name="bizname" value={profileDetails.bizname} onChange={(event) => handleChange(event)} />
                    </label> <br />


                    <label htmlFor="firstName">
                        Catch Phrase* <br />
                        <input type="text" value='usisnssgfff'/> 
                    </label> <br />


                    <label htmlFor="firstName">
                        Business* <br />
                        <input type="text" name="business" value={profileDetails.business}  onChange={(event) => handleChange(event)}/> 
                    </label> <br />

                    <button type="submit"> SAVE </button>
                </div>


    
                </form>
         

        </div>
                    
        </>
    )
}

export default OwnerProfile