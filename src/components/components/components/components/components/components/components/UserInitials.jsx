import { useState, useEffect} from "react";

export default function UserInitials({contactId}) {
  const [contact, setContact] = useState(null)

  const getContact = () => {
    fetch(`https://boolean-api-server.fly.dev/Chloe070196/contact/${contactId}`)
      .then((r) => r.json())
      .then((data) => setContact(data))
  };

    useEffect(getContact, [])

    return(
        contact? <>
                <div className="round-container">
                    <p className="user-initials">{contact.firstName[0] + contact.lastName[0]}</p>
                </div>
            </> :
            <div></div>
    )
}