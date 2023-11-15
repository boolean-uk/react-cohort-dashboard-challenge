import { useState, useEffect } from "react";


export default function ProfileIcon(props) {
  const [user ,setUser] = useState(null)
  const {contact} = props



    return <div className="profile-icon"> {!contact ? "..." : contact.firstName.charAt(0) + contact.lastName.charAt(0)}</div>;
  }