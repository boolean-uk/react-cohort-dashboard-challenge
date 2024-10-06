import React, { useState, useEffect } from "react";
import Form from "../layout/Form";

import '../../styling/profile.css';
import Avatar from "./Avatar";

const ProfilePage = () => {
    const [profileInfo, setProfileInfo] = useState(null);

    const accountInfoFields = [
        { id: "firstName", label: "First Name", type: "text", required: true },
        { id: "lastName", label: "Last Name", type: "text", required: true },
        { id: "username", label: "Username", type: "text", required: true },
        { id: "email", label: "Email", type: "email", required: true }
    ];

    const addressFields = [
        { id: "street", label: "Street", type: "text", required: true },
        { id: "suite", label: "Suite", type: "text" },
        { id: "city", label: "City", type: "text", required: true },
        { id: "zipcode", label: "Zipcode", type: "text", required: true }
    ];

    const contactInfoFields = [
        { id: "phone", label: "Phone", type: "tel", required: true },
        { id: "website", label: "Website", type: "url" }
    ];

    const companyInfoFields = [
        { id: "companyName", label: "Company Name", type: "text" },
        { id: "catchPhrase", label: "Catch Phrase", type: "text" },
        { id: "businessStatement", label: "Business Statement", type: "text" }
    ];

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <div className="profile-information-box">
                <header className="profile-information-header">
                    <Avatar username="Test User" customClassname="user-avatar"/>
                    <p className="username">Test User</p>
                </header>
                <div className="form-grid">
                    <Form title="Account Info" fields={accountInfoFields}/>
                    <Form title="Address" fields={addressFields}/>
                    <Form title="Contact Info" fields={contactInfoFields}/>
                    <Form title="Company Info" fields={companyInfoFields}/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;