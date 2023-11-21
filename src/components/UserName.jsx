import { Link } from "react-router-dom";
import { contactProps } from "@utilities/propTypeDefs";

export default function UserName({ contact }) {
  const { firstName, lastName, id } = contact;

  return (
    <h2 className="user-name text-lg font-bold">
      <Link to={`/profile/${id}`}>
        {firstName} {lastName}
      </Link>
    </h2>
  );
}

UserName.propTypes = { contact: contactProps };
