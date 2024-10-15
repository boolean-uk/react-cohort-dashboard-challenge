import { useUser } from "../../context/UserProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function PrimeUser() {

    const { userId } = useParams();

    const { primeUser, getPrimeUser } = useUser();

    useEffect(() => {
        getPrimeUser(userId);
    }, [userId]) 

    if (!primeUser) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2>{primeUser.firstName} {primeUser.lastName}</h2>
            <p>This is the logged in user with id: {primeUser.id}</p>
        </>
    )
}

export default PrimeUser