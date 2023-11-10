import { useEffect, useState } from "react";

import userArr from "./users";

export default function ProfileImg({userId, size}) {
  const users = userArr
  const [user, setUser] = useState({})
  // random background color
  const styles = { backgroundColor: `hsl(${Math.random()*360}, 70%, 50%)` };

  const findUser = () => {
    const foundUser = users.find(user => user.contactId === userId)
    setUser(foundUser)
  }

  useEffect(findUser, [])

  return (
    <div className={`profile-img ${size}`} style={styles} >
      {/* {user.firstName[0]+user.lastName[0]} */}
    </div>
  )
}