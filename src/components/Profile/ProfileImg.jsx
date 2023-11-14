import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";
import { useEffect, useState } from "react";

export default function ProfileImg({contactId, size}) {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  const loadUser = () => {
    const endpoint = `/contact/${contactId}`

    fetch(baseURL+endpoint)
    .then(response => response.json())
    .then(data => setUser({...data, ["initials"]: data.firstName[0]+data.lastName[0]}))
    .catch((error) => console.log(error))
  }

  useEffect(loadUser, [])

  const styles = { backgroundColor: `hsl(${contactId/15*360}, 70%, 50%)` };

  const navLink = contactId === 1 ? "/profile" : "/user/"+contactId

  if (!user) return

  return (
    <div className={`profile-img ${size}`} style={styles} onClick={() => navigate(navLink)}>
      {user.initials}
    </div>
  )
}