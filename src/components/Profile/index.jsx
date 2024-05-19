


import "./Profile.css"
export default function Profile(){
    return (
        <>
            <div>
                <h2>User Profile</h2>
                <form>

                    <div className="profile-form">

                        <section className="account-section">
                            <h2>Account Info</h2>
                            <label>
                                First Name<sup>*</sup>
                                <input type="text" name="firstName" required />
                            </label>

                            <label>
                                Last Name<sup>*</sup>
                                <input type="text" name="lastName" required />
                            </label>

                            <label>
                                Username<sup>*</sup>
                                <input type="text" name="username" required />
                            </label>

                            <label>
                                Email<sup>*</sup>
                                <input type="email" name="email" required />
                            </label>
                        </section>

                        <section className='address-section'>
                            <h2>Address</h2>
                            <label>
                                Street
                                <input type="text" name="street" />
                            </label>

                            <label>
                                Suite
                                <input type="text" name="suite" />
                            </label>

                            <label>
                                City
                                <input type="text" name="city"/>
                            </label>

                            <label>
                                Zipcode
                                <input type="text" name="zipcode"/>
                            </label>
                        </section>

                        <section className='contact-section'>
                            <h2>Contact Info</h2>
                            <label>
                                Phone<sup>*</sup>
                                <input type="text" name="phone"/>
                            </label>

                            <label>
                                Website
                                <input type="text" name="website" />
                            </label>
                        </section>

                        <section className='company-section'>
                            <h2>Company Info</h2>
                            <label>
                                Name
                                <input type="text" name="companyName" />
                            </label>
                            <label>
                                Catch Phrase
                                <input type="text" name="catchPhrase"/>
                            </label>
                            <label>
                                Business Statement
                                <input type="text" name="businessStatement"/>
                            </label>
                        </section>

                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    )     
}

