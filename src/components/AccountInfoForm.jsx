import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";
import "../styles/AccountInfoForm.css";

export default function AccountInfoForm({ firstName, setFirstName, lastName, setLastName, email, setEmail, readOnly }) {
    return (
        <div >
            <div className="form-content-profile">
                <h3>Account Info</h3>
                <div className="form-group-profile">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        readOnly={readOnly}
                    />
                </div>
                <div className="form-group-profile">
                    <label htmlFor="lastName">Last name*</label>
                    <input
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        readOnly={readOnly}
                    />
                </div>
                <div className="form-group-profile">
                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    );
}