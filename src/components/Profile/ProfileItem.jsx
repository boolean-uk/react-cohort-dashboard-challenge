import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

export default function ProfileItem({contact}){
    const {firstName, lastName, email, street, city, id, latitude, longitude, favouriteColour,profileImage } = contact

    const [data, setData] = useState({
        "firstName": firstName,
        "lastName": lastName,
        "street": street,
        "city": city,
        "gender": "",
        "email": email,
        "jobTitle": "",
        "latitude": latitude,
        "longitude": longitude,
        "favouriteColour": favouriteColour,
        "profileImage": profileImage
    }) 

    async function handleSubmit(){
        if (!id) return
        const response = await fetch(`https://boolean-api-server.fly.dev/louisshr/contact/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        //const resData = await response.json()
        if (response.ok){
            toast("Your profile has been updated!")
        }        
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="profile-master-container">
            
            <h1 className="header-default">Profile</h1>
            
            <div className="profile-container">
                <div className="profile-initials">
                    <div className="profile-page-icon" style={{backgroundColor: favouriteColour}}>
                        <p className="font-paragraph">{`${firstName.charAt(0)}${lastName.charAt(0)}`}</p>
                    </div>   
                    <h1 className="header-default profile-name">{`${firstName} ${lastName}`}</h1>
                </div>
                <hr />

                <div className="profile-form-container">
                    <div className="profile-form">
                        <h1 className="header-default">Account Info</h1>
                        <div>
                            <label htmlFor="firstName" className="font-paragraph">First Name*</label>
                            <input
                            id="firstName"
                            name="firstName"
                            className='profile-form-input font-paragraph' 
                            value={data.firstName}
                            onChange={handleChange}
                            type='text'                                                 
                            />
                        </div>
                        <div>
                            <label className="font-paragraph">Last Name*</label>
                            <input
                            name="lastName"                            
                            value={data.lastName}
                            className='profile-form-input font-paragraph'
                            onChange={handleChange} 
                            type='text'                                                 
                            />
                        </div>
                        <div>
                            <label className="font-paragraph">Email*</label>
                            <input           
                            name="email"                 
                            value={data.email}
                            className='profile-form-input font-paragraph' 
                            onChange={handleChange}
                            type='text'                                                 
                            />
                        </div>                        
                    </div>                
                    <div className="profile-form">
                        <h1 className="header-default">Address</h1>
                        <div>
                            <label className="font-paragraph">Street*</label>
                            <input    
                            name="street"
                            value={data.street}                        
                            className='profile-form-input font-paragraph' 
                            onChange={handleChange}
                            type='text'                                                 
                            />
                        </div>
                        <div>
                            <label className="font-paragraph">City*</label>
                            <input   
                            name="city" 
                            value={data.city}                        
                            className='profile-form-input font-paragraph' 
                            onChange={handleChange}
                            type='text'                                                 
                            />
                        </div>                        
                    </div>                        
                </div>
                <div className="profile-form-button-container">
                    <button onClick={handleSubmit} className='profile-form-button'>Save</button>
                </div>
            </div>             
            <Toaster />                
        </div>
    )
}