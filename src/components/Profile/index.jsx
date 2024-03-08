import { useContext, useState } from "react"
import { AppContext } from "../../App"
import Avatar from "react-avatar"
import './style.css'

function RenderProfile() {
    const {loggedInUser, setLoggedInUser} = useContext(AppContext)
    const [editUser, setEditUser] = useState({})
    if(!loggedInUser) return <p>Please log inn</p>

    function handleSubmit(event) {
        event.preventDefault()
        
    }

    function handleOnChange(event){
        const [name, value] = event.target
        setEditUser({...editUser, [name]: value})
    }

    return (
        <>
        <h1>Profile</h1>
        <article className="profile-container">
          <div className="user-header">
            <Avatar className="user-avatar" name={`${loggedInUser.firstName} ${loggedInUser.lastName}`} round={true} />
            <div className="user-name">
              <h2>{loggedInUser.firstName} {loggedInUser.lastName}</h2>
            </div>
          </div>
          <div className="user-info">
            <form onSubmit={handleSubmit}>
                <div className="devider">
                    -----------------------------------------------------------------------------------
                </div>
                <div className="devider">
                    -----------------------------------------------------------------------------------
                </div>

                <div className="account-info">
                    <h2>Account info</h2>
                    <div>
                        <label htmlFor="firstName">First Name*</label>
                        <input type="text"
                            id="firstName"
                            name="firstName"
                            onChange={handleOnChange}
                            value={editUser.firstName}>
                            </input>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name*</label>
                        <input type="text"
                            id="lastName"
                            name="lastName"
                            onChange={handleOnChange}
                            value={editUser.lastName} ></input>
                    </div>
                    <div>
                        <label htmlFor="username">Username*</label>
                        <input type="text"
                            id="username"
                            name="username"
                            onChange={handleOnChange}
                            value={editUser.username}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input type="text"
                            id="email"
                            name="email"
                            onChange={handleOnChange}
                            value={editUser.email} ></input>
                    </div>
                </div>

                <div className="address">
                    <h2>Address</h2>
                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="text"
                            id="street"
                            name="street"
                            onChange={handleOnChange}
                            value={editUser.street} ></input>
                    </div>
                    <div>
                        <label htmlFor="suite">Suite</label>
                        <input type="text"
                            id="suite"
                            name="suite"
                            onChange={handleOnChange}
                            value={editUser.suite} ></input>
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text"
                            id="city"
                            name="city"
                            onChange={handleOnChange}
                            value={editUser.city} ></input>
                    </div>
                    <div>
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text"
                            id="zipcode"
                            name="zipcode"
                            onChange={handleOnChange}
                            value={editUser.zipcode} ></input>
                    </div>
                </div>

                <div className="devider">
                    -----------------------------------------------------------------------------------
                </div>
                <div className="devider">
                    -----------------------------------------------------------------------------------
                </div>

                <div className="contact-info">
                    <h2>Contact info</h2>
                    <div>
                        <label htmlFor="phone">Phone*</label>
                        <input type="text"
                            id="phone"
                            name="phone"
                            onChange={handleOnChange}
                            value={editUser.phone}></input>
                    </div>
                    <div>
                        <label htmlFor="webiste">Website</label>
                        <input type="text"
                            id="website"
                            name="website"
                            onChange={handleOnChange}
                            value={editUser.website}></input>
                    </div>
                </div>

                <div className="company-info">
                    <h2>Company info</h2>
                    <div>
                        <label htmlFor="company_name">Name</label>
                        <input type="text"
                            id="company_name"
                            name="company_name"
                            onChange={handleOnChange}
                            value={editUser.company_name} ></input>
                    </div>
                    <div>
                        <label htmlFor="catch_phrase">Catch Phrase</label>
                        <input type="text"
                            id="catch_phrase"
                            name="catch_phrase"
                            onChange={handleOnChange}
                            value={editUser.catch_phrase} ></input>
                    </div>
                    <div>
                        <label htmlFor="statement">Business Statement</label>
                        <input type="text"
                            id="statement"
                            name="statement"
                            onChange={handleOnChange}
                            value={editUser.statement} ></input>
                    </div>
                </div>
                <div></div>
                <div>
                    <button className="profile-button" type="submit">Save</button>
                </div>
            </form>
          </div>
        </article>
        </>
      )
}

export default RenderProfile