import { contactProps } from "../utilities/propTypeDefs";

export default function UserName({ contact }) {
  const { firstName, lastName } = contact;

  return (
    <h2 className="user-name text-lg font-bold">
      {firstName} {lastName}
    </h2>
  );
}

UserName.propTypes = { contact: contactProps };
