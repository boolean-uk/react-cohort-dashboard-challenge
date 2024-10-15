import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import { useEffect } from "react";

function UserProfile() {

    const { userId } = useParams();

    const { user, getUser } = useUser();

    useEffect(() => {
        getUser(userId);
    }, [userId]) 

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>This is user with id: {user.id}</p>
        </>
    )
}

export default UserProfile