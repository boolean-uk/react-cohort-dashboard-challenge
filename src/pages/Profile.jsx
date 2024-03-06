import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
    }, [id]);
    return (
        user ?
            <div>
                <h1>{user.firstName} {user.lastName}</h1>
                <p>{user.email}</p>
            </div>
            :
            <h1>Loading...</h1>
    )
}