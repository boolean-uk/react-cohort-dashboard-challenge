export default function profile() {

    return (

        <main className="main-profile">
            <h2 className='head'>Profile</h2>
            <div className="container">
                <div className="header-profile">
                    <div className="user-avatar">ML</div>
                    <h3>Name</h3>
                </div>
                <form className="profile-form">
                    <div>
                        <hr />
                        <h2>Account info</h2>
                        <label htmlFor="firstName">
                            First Name*
                        </label>
                        <input id="firstname" required='true' type="text" name="firstName" value='' placeholder="" />
                        <label htmlFor="lastName">
                            Last Name*
                        </label>
                        <input id="lastname" required='true' type="text" name="lastName" value='' placeholder="" />
                        <label htmlFor="username">
                            Username*
                        </label>
                        <input id="username" type="text" required='true' name="userName" value='' placeholder="N/A" />
                        <label htmlFor="email">
                            Email*
                        </label>
                        <input id='email' required='true' type="email" name="email" value='' placeholder="" />
                    </div>
                    <div>
                        <hr />
                        <h2>Address</h2>
                        <label htmlFor="street">
                            Street
                        </label>
                        <input id="street" type="text" name="street" value='' placeholder="" />
                        <label htmlFor="suite">
                            Suite
                        </label>
                        <input id="suite" type="text" name="suite" value='' placeholder="N/A" />
                        <label htmlFor="city">
                            City
                        </label>
                        <input id="city" type="text" name="city" value='' placeholder="" />
                        <label htmlFor="zipcode">
                            Zipcode
                        </label>
                        <input id='zip-code' type="number" name="zipCode" value='' placeholder="N/A" />
                    </div>
                    <div>
                         <hr />
                        <h2>Contact info</h2>
                        <label htmlFor="phone">
                            Phone*
                        </label>
                        <input id="phone" required='true' type="tel" name="phone" value='' placeholder="" />
                        <label htmlFor="website">
                            Website
                        </label>
                        <input id="website" type="url" name="website" value='' placeholder="" />
                        <p>*Required</p>
                    </div>
                    <div>
                        <hr />
                        <h2>Company info</h2>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input id="name" type="text" name="name" value='' placeholder="N/A" />
                        <label htmlFor="catch-phrase">
                            Catch Phrase
                        </label>
                        <input id="catch-phrase" type="text" name="catch-phrase" value='' placeholder="N/A" />
                        <label htmlFor="business-statement">
                            Business Statement
                        </label>
                        <input id="business-statement" type="text" name="business-statement" value='' placeholder="N/A" />
                    </div>
                </form>
            </div>

        </main>

    )

}