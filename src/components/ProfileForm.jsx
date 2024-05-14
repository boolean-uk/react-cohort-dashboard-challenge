import { useState } from "react";
import ProfileImage from "./ProfileImage";

export default function ProfileForm({ loggedInUser, setLoggedInUser }) {
    const [formData, setFormData] = useState({
        city: loggedInUser.city,
        email: loggedInUser.email,
        favouriteColour: loggedInUser.favouriteColour,
        firstName: loggedInUser.firstName,
        gender: loggedInUser.gender,
        jobTitle: loggedInUser.jobTitle,
        lastName: loggedInUser.lastName,
        latitude: loggedInUser.latitude,
        longitude: loggedInUser.longitude,
        profileImage: loggedInUser.profileImage,
        street: loggedInUser.street
    })

    function handleSubmit(e) {
        e.preventDefault()

        async function changeProfile() {
            const options = {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/contact/${loggedInUser.id}`, options)
            const data = await response.json()

            setLoggedInUser(data)
        }

        changeProfile()
    }

    function handleChange(e) {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name] :value
        })
    }

    return (
        <>
            {loggedInUser && 
                <form className="profile-form" onSubmit={handleSubmit}>
                    <section className="profile-title">
                        <ProfileImage loggedInUser={loggedInUser}/>
                        <h2>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h2>
                    </section>

                    <section className="profile-form-container">
                        <ul className="profile-ul">
                            <li>
                                <h2>Account info</h2>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" value={formData.firstName} name="firstName" onChange={handleChange}/>

                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" value={formData.lastName} name="lastName" onChange={handleChange}/>

                                <label htmlFor="email">Email</label>
                                <input type="email" value={formData.email} name="email" onChange={handleChange}/>

                                <label htmlFor="image">Profile image</label>
                                <input type="url" value={formData.profileImage} name="profileImage" onChange={handleChange}/>
                            </li>

                            <li>
                                <h2>Address</h2>
                                <label htmlFor="street">Street</label>
                                <input type="text" value={formData.street} name="street" onChange={handleChange}/>

                                <label htmlFor="city">City</label>
                                <input type="text" value={formData.city} name="city" onChange={handleChange}/>

                                <label htmlFor="latitude">Latitude</label>
                                <input type="text" value={formData.latitude} name="latitude" onChange={handleChange}/>

                                <label htmlFor="longitude">Longitude</label>
                                <input type="text" value={formData.longitude} name="longitude" onChange={handleChange}/>
                            </li>

                            <li>
                                <h2>Contact info</h2>
                                <label htmlFor="color">Favorite color</label>
                                <input type="text" value={formData.favouriteColour} name="favouriteColour" onChange={handleChange}/>

                                <label htmlFor="gender">Gender</label>
                                <input type="text" value={formData.gender} name="gender" onChange={handleChange}/>

                                
                            </li>

                            <li>
                                <h2>Company info</h2>
                                <label htmlFor="job">Name</label>
                                <input type="text" value={formData.jobTitle} name="jobTitle" onChange={handleChange}/>
                            </li>
                        </ul>
                        <button className="post-button">Save</button>
                    </section>
                </form>
            }
        </>
    )
}