import { useContext } from "react"
import { ProfileContext } from "./AuthorProfile"

export default function AuthorProfileForm() {
    const { findProfile, handleSubmit, handleChange, updateProfile } = useContext(ProfileContext)

    return (
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
    )
}