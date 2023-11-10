import { useState, useEffect } from "react";

const initialContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

export default function UserName({ contactId }) {
  const [contact, setContact] = useState(initialContact);

  const getContactName = () => {
    fetch(`https://boolean-api-server.fly.dev/Chloe070196/contact/${contactId}`)
      .then((r) => r.json())
      .then((data) => setContact(data));
  };

  useEffect(() => contactId && getContactName(), []);

  return (
    <>
      {contact ? (
        <h3>
          {contact.firstName} {contact.lastName}
        </h3>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
