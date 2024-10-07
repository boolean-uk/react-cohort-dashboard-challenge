import { useContext } from "react";
import { AppContext } from "../App";

export default function Profile() {
    const context = useContext(AppContext)

    return (
        <div className="profile">
            <h3>Profile</h3>
            {context.user ? (
                <div>
                    <p>First Name: {context.user.firstName}</p>
                    <p>Last Name: {context.user.lastName}</p>
                    <p>Gender: {context.user.gender}</p>
                    <p>Email: {context.user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    )
}
