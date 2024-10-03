import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockContact } from "../common/mock";

export default function Profile() {
  const [contact, setContact] = useState(mockContact);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/hermagst/contact/${id}`)
      .then((res) => res.json())
      .then((body) => setContact(body));
  }, [id]);

  return (
    <div>
      <p>City: {contact.city}</p>
      <p>Street: {contact.street}</p>
      <p>Email: {contact.email}</p>
      <p>Gender: {contact.gender}</p>
      <p>Job title: {contact.jobTitle}</p>
      <p>
        Name: {contact.firstName} {contact.lastName}
      </p>
    </div>
  );
}
