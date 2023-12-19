/* eslint-disable react/prop-types */

export default function CustomProfileIcon({ contactPerson }) {
  const getProfileIconClass = () => {
    if (!contactPerson) return "...";

    return contactPerson.id % 2 === 0
      ? "standardone"
      : "standardtwo";
  };

  const getInitials = () => {
    if (!contactPerson) return "...";

    return contactPerson.firstName.charAt(0) + contactPerson.lastName.charAt(0);
  };

  return (
    <div className={`customProfileicon ${getProfileIconClass()}`}>
      {getInitials()}
    </div>
  );
}