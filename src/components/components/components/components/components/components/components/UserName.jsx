import { useState} from "react";
import { useEffect } from "react";
import getData from "../../../../../../../../js_functions/get";

const initialContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

export default function UserName({ contactId, reloadContacts }) {
  const [contact, setContact] = useState(initialContact);

  useEffect(() => contactId && getData(`contact/${contactId}`, setContact), [reloadContacts]);

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
