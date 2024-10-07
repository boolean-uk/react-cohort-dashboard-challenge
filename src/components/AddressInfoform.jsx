import "../styles/AccountInfoForm.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

export default function AddressInfoForm({ street, setStreet, city, setCity, readOnly }) {
    return (
        <div >
            <div className="form-content-profile">
                <h3>Address</h3>
                <div className="form-group-profile">
                    <label htmlFor="street">Street</label>
                    <input
                        id="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        readOnly={readOnly}
                    />
                </div>
                <div className="form-group-profile">
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    );
}