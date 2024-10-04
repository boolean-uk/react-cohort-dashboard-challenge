import { useContext, useState } from "react";
import "../Profile/Profile.css";
import { PostContext } from "../../App";
import { useParams } from "react-router-dom";
import { UpdateAContact } from "../../PostAPIs/PostAPI";

export default function Profile() {
    const { authors, username } = useContext(PostContext);
    const { id } = useParams();
    const author = authors.find((a) => a.id === Number(id));
    const [updatedInfo, setUpdatedInfo] = useState({
        firstName: author.firstName,
        lastName: author.lastName,
        gender: author.gender,
        email: author.email,
        street: author.street,
        city: author.city,
        favouriteColour: author.favouriteColour
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedInfo({...updatedInfo, [name]: value});
    }

    const handleSaveChanges = async (event) => {
        event.preventDefault();
        try {
            await UpdateAContact(username, author.id, updatedInfo);
        } catch (error) {
            console.error("Error in updating a contact: " + error);
        }
    } 

    return (
        <div className="profile-container">
        <h2 className="title">Profile</h2>
        <div className="profile-card">
        <div className="profile-header">
            <div className="profile-image" style={{backgroundColor: updatedInfo.favouriteColour}}>
              <p className="initials4">{updatedInfo.firstName.charAt(0)}{updatedInfo.lastName.charAt(0)}</p>
            </div>
            <h3 className="profile-name">{updatedInfo.firstName} {updatedInfo.lastName}</h3>
        </div>
        <div className="profile-info1">
            <div className="account-info">
            <hr className="post-divider" />
                <h4>Account Info</h4>
                <p>First Name*</p>
                <input type="text" name="firstName" value={updatedInfo.firstName} onChange={handleInputChange}/>
                <p>Last Name*</p>
                <input type="text" name="lastName" value={updatedInfo.lastName} onChange={handleInputChange}/>
                <p>Username*</p>
                <input type="text" name="gender" value={updatedInfo.gender} onChange={handleInputChange}/>
                <p>Email*</p>
                <input type="text" name="email" value={updatedInfo.email} onChange={handleInputChange}/>
            </div>
            <div className="address-info">
            <hr className="post-divider" />
                <h4>Address Info</h4>
                <p>Street</p>
                <input type="text" name="street" value={updatedInfo.street} onChange={handleInputChange}/>
                <p>City</p>
                <input type="text" name="city" value={updatedInfo.city} onChange={handleInputChange}/>
                <p>Facourite Colour</p>
                <input type="text" name="favouriteColour" value={updatedInfo.favouriteColour} style={{backgroundColor: updatedInfo.favouriteColour}} onChange={handleInputChange}/>
                <p className="required">Required*</p>
                {/* PART OF THE STYLING GUIDE, BUT NO VALUES FROM CONTACT API
                <p>Suite</p>
                <input type="text" name="suite" value={"Mor"}/>
                <p>Zipcode</p>
                <input type="text" name="zipcode" value={"Mor"}/>
            </div>
        </div>
        <div className="profile-info2">
            <div className="contact-info">
            <hr className="post-divider" />
                <h4>Contact Info</h4>
                <p>Phone*</p>
                <input type="text" name="phone" value={"Mor"}/>
                <p>Website</p>
                <input type="text" name="website" value={"Mor"}/>
                <p className="required">Required*</p>
                
            </div>
            <div className="company-info">
            <hr className="post-divider" />
                <h4>Company Info</h4>
                <p>Name</p>
                <input type="text" name="companyName" value={"Mor"}/>
                <p>catch Phrase</p>
                <input type="text" name="catchPhrase" value={"Mor"}/>
                <p>Buisness Statement</p>
                <input type="text" name="buisnessStatement" value={"Mor"}/>
                */}
            </div>
        </div>
        <button className="profile-button" onClick={handleSaveChanges}>Save</button>
    </div>
    </div>
    );
}