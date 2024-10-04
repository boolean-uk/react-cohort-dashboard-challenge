import { useState, useEffect } from "react";

export default function DisplayInitials({ contactId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [initials, setInitials] = useState("");

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/contact/${contactId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        const firstNameInitial = data.firstName ? data.firstName[0] : "";
        const lastNameInitial = data.lastName ? data.lastName[0] : "";
        setInitials(`${firstNameInitial}${lastNameInitial}`);
      });
  }, [contactId]);

  return (
    <div>
      <span className="initials-circle">{initials}</span>
      {firstName} {lastName}
    </div>
  );
}
