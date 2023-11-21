import { Link } from "react-router-dom";

import PulseLoader from "@components/Loader/PulseLoader";

import { contactProps } from "@utilities/propTypeDefs";
import { initialiser } from "@utilities/string";

//TODO: I want to add different colours per contactId

export default function UserIcon({ contact }) {
  if (!contact) {
    return <PulseLoader />;
  }

  const { firstName, lastName, id } = contact;

  const initials = initialiser(firstName, lastName);
  return (
    <Link to={`/profile/${id}`} className="user-icon">
      <div className="grid h-14 w-14 shrink-0 content-center justify-center rounded-full bg-red-400">
        {initials}
      </div>
    </Link>
  );
}

UserIcon.propTypes = { contact: contactProps };
