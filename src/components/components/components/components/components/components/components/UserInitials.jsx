import { useState, useEffect} from "react";

const initialContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

export default function UserInitials() {
  const [contact, setContact] = useState(initialContact);

  const getContactName = () => {
    fetch(`https://boolean-api-server.fly.dev/Chloe070196/contact/${contactId}`)
      .then((r) => r.json())
      .then((data) => setContact(data));
  };

//   useEffect(getContactName, [])


    return(
        <>
            <div className="round-container">
                <p></p>
                <p></p>
            </div>
        </>
    )
}