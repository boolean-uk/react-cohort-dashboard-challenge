import { useEffect, useState } from "react";

import userArr from "./users";

export default function ProfileImg({userId, size}) {
  const users = userArr
  const [user, setUser] = useState({})
  // random background color
  const styles = { backgroundColor: `hsl(${Math.random()*360}, 60%, 50%)` };

  const findUser = () => {
    console.log(userId)
    const foundUser = users.find(user => user.contactId === userId)
    setUser(foundUser)
    console.log(user)
  }

  useEffect(findUser, [])

  return (
    <div className={`profile-img ${size}`} style={styles} >
      {user.firstName[0] + user.lastName[0]}
    </div>
  )
}