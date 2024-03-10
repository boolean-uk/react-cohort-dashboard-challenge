import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProfileUser = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data based on userId
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://boolean-api-server.fly.dev/malimo326/contact/${userId}`);
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    throw new Error("Failed to fetch user data");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();

    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-user">
            <h2>{user.firstName} {user.lastName}</h2>
            <ul>
            <li>Email: {user.email}</li>
            <li>gender: {user.gender}</li>
            <li>jobTitle: {user.jobTitle}</li>
            <li>city: {user.city}</li>
            <li>Street: {user.street}</li>
            </ul>
            
           

            {/* Add more user information here */}
        </div>
    );
};

export default ProfileUser;
