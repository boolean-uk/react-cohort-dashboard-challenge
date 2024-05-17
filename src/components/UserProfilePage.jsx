import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserProfilePage() {
  const [user, setUser] = useState([])
  const {id} = useParams()

    useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/PerikK/contact/${id}`)
      .then((response) => response.json())
      .then(setUser);
  }, [id]);

// console.log(user.firstName);
  return (
    <h1>{user.firstName}</h1>
  )

}