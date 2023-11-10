import PulseLoader from "./Loader/PulseLoader";

import { contactProps } from "../utilities/propTypeDefs";
import { initialiser } from "../utilities/string";

export default function UserIcon({ contact }) {
  if (!contact) {
    return <PulseLoader />;
  }

  const { firstName, lastName } = contact;

  const initials = initialiser(firstName, lastName);
  return (
    <div className="user-icon grid h-14 w-14 shrink-0 content-center justify-center rounded-full bg-red-400">
      {initials}
    </div>
  );
}

UserIcon.propTypes = { contact: contactProps };
