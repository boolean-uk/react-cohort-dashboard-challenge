import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import getData from "../../../../../../../../js_functions/get";

export default function UserInitials({contactId}) {
  const [contact, setContact] = useState(null)

    useEffect(() => getData(`contact/${contactId}`, setContact), [])

    return(
        contact? <>
        <Link to={`/profile/${contactId}`}>
              <div className="round-container">
                <p>{contact.firstName[0] + contact.lastName[0]}</p>
              </div>
        </Link>

            </> :
            <div></div>
    )
}