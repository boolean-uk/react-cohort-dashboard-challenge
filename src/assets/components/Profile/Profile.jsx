import "../Profile/Profile.css";
import ProfileLogo from "../SharedIcons/ProfileLogo";
import { AppContext } from "../../../App";
import { useContext } from "react";

export default function Profile() {

    const { loggedInUser } = useContext(AppContext)
    return (
        <>
            <div className="profile-container">
            <h2 className="title">Profile</h2>
            <div className="profile-card">
            <div className="profile-header">
                <div className="profile-logo-header1">
                    <p className="inital-logo-header1">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
                    
                </div>
                <h3 className="profile-name">Name</h3>
            </div>
            <div className="profile-info1">
                <div className="account-info">
                <hr className="post-divider1" />
                    <h4>Account Info</h4>
                    <p>First Name*</p>
                    <input type="text" name="firstName" value={loggedInUser.firstName}/>
                    <p>Last Name*</p>
                    <input type="text" name="lastName" value={loggedInUser.lastName}/>
                    <p>Username*</p>
                    <input type="text" name="username" value={"Faren din"}/>
                    <p>Email*</p>
                    <input type="text" name="email" value={loggedInUser.email}/>
                </div>
                <div className="address-info">
                <hr className="post-divider1" />
                    <h4>Address Info</h4>
                    <p>Street</p>
                    <input type="text" name="street" value={loggedInUser.street}/>
                    <p>Suite</p>
                    <input type="text" name="suite" value={" "}/>
                    <p>City</p>
                    <input type="text" name="city" value={loggedInUser.city}/>
                    <p>Zipcode</p>
                    <input type="text" name="zipcode" value={" "}/>
                </div>
            </div>
            <div className="profile-info2">
                <div className="contact-info">
                <hr className="post-divider1" />
                    <h4>Contact Info</h4>
                    <p>Phone*</p>
                    <input type="text" name="phone" value={" "}/>
                    <p>Website</p>
                    <input type="text" name="website" value={" "}/>
                    <p className="required">* Required</p>
                    
                </div>
                <div className="company-info">
                <hr className="post-divider1" />
                    <h4>Company Info</h4>
                    <p>Name</p>
                    <input type="text" name="companyName" value={"Experis"}/>
                    <p>Job Title</p>
                    <input type="text" name="jobTitle" value={loggedInUser.jobTitle}/>
                </div>
            </div>
            <button className="profile-button">Save or Edit</button>
        </div>
        </div>
    </>
    )
}