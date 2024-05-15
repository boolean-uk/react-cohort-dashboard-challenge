import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { StateContext } from "../App"

export default function AuthorProfile() {
    const [updateProfile, setUpdateProfile] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        street: '',
        city: '',
        latitude: '',
        longitude: '',
        jobTitle: ''
    })

    const { id } = useParams()

    const { authors, setAuthors } = useContext(StateContext)

    const findProfile = authors.find(author => author.id === Number(id))

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setUpdateProfile({
            ...updateProfile,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact/${findProfile.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: updateProfile.firstName,
                lastName: updateProfile.lastName,
                gender: updateProfile.gender,
                email: updateProfile.email,
                street: updateProfile.street,
                city: updateProfile.city,
                latitude: parseInt(updateProfile.latitude),
                longitude: parseInt(updateProfile.longitude),
                jobTitle: updateProfile.jobTitle
            })
        }).then(() => {
            setAuthors(prevAuthors => {
                const updatedAuthors = prevAuthors.map(author => {
                    if (author.id === findProfile.id) {
                        return { ...author, ...updateProfile }
                    }
                    return author
                })
                return updatedAuthors
            })
        })

        navigate('/')
    }

    return (
        <div className="profile-container">
            {findProfile &&
                <>
                    <h1>Profile</h1>

                    <main id="author-profile">
                        <section className="name">
                            <figure style={{ backgroundColor: `${findProfile.favouriteColour}` }}>
                                <figcaption>
                                    {findProfile.firstName[0]}{findProfile.lastName[0]}
                                </figcaption>
                            </figure>

                            <h2>{findProfile.firstName} {findProfile.lastName}</h2>
                        </section>

                        <div id="separator"></div>

                        <form onSubmit={handleSubmit}>
                            <div id="section-info">
                                <section>
                                    <h2>Account Info</h2>

                                    <div className="form-text">
                                        <label htmlFor="firstName">Fist Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            onChange={handleChange}
                                            value={updateProfile.firstName}
                                            placeholder={findProfile.firstName}
                                            required
                                        />
                                    </div>

                                    <div className="form-text"> 
                                        <label htmlFor="lastName">Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            onChange={handleChange}
                                            value={updateProfile.lastName}
                                            placeholder={findProfile.lastName}
                                            required
                                        />
                                    </div>

                                    <div className="form-text">
                                        <label htmlFor="gender">Gender</label>
                                        <input 
                                            type="text" 
                                            name="gender" 
                                            onChange={handleChange}
                                            value={updateProfile.gender}
                                            placeholder={findProfile.gender}
                                            required
                                        />
                                    </div>
                                    
                                    <div id="separator"></div>
                                </section>

                                <section>
                                    <h2>Address</h2>

                                    <div className="form-text">
                                        <label htmlFor="street">Street</label>
                                        <input 
                                            type="text" 
                                            name="street" 
                                            onChange={handleChange}
                                            value={updateProfile.street}
                                            placeholder={findProfile.street}
                                            required
                                        />
                                    </div>

                                    <div className="form-text">
                                        <label htmlFor="city">City</label>
                                        <input 
                                            type="text" 
                                            name="city" 
                                            onChange={handleChange}
                                            value={updateProfile.city}
                                            placeholder={findProfile.city}
                                            required
                                        />
                                    </div>

                                    <div className="form-number">
                                        <summary>
                                            <label htmlFor="latitude">Latitude</label>
                                            <input 
                                                type="number" 
                                                name="latitude"
                                                onChange={handleChange} 
                                                value={updateProfile.latitude}
                                                placeholder={findProfile.latitude}
                                                required
                                            />
                                        </summary>

                                        <summary>
                                            <label htmlFor="longitude">Longitude</label>
                                            <input 
                                                type="number" 
                                                name="longitude" 
                                                onChange={handleChange}
                                                value={updateProfile.longitude}
                                                placeholder={findProfile.longitude}
                                                required
                                            />
                                        </summary>
                                    </div>
                                    
                                    <div id="separator"></div>
                                </section>
                            </div>

                            <div id="section-info">
                                <section>
                                    <h2>Contact Info</h2>

                                    <div className="form-text">
                                        <label htmlFor="email">E-mail</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            onChange={handleChange}
                                            value={updateProfile.email}
                                            placeholder={findProfile.email}
                                            required
                                        />
                                    </div>
                                </section>

                                <section>
                                    <h2>Company Info</h2>

                                    <div className="form-text">
                                        <label htmlFor="jobTitle">Business Statement</label>
                                        <input 
                                            type="text" 
                                            name="jobTitle"
                                            onChange={handleChange}
                                            value={updateProfile.jobTitle} 
                                            placeholder={findProfile.jobTitle}
                                            required
                                        />
                                    </div>
                                </section>
                            </div>

                            <button type="submit">Save</button>
                        </form>
                    </main>
                </>
            }
        </div>
    )
}