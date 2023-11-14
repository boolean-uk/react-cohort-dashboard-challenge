import React from "react";

export default function ProfileIcon({ contactPerson }) {
  const getProfileIconClass = () => {
    if (!contactPerson) return "...";

    return contactPerson.id % 2 === 0
      ? "primaryColor__one"
      : "primaryColor__two";
  };

  const getInitials = () => {
    if (!contactPerson) return "...";

    return contactPerson.firstName.charAt(0) + contactPerson.lastName.charAt(0);
  };

  return (
    <div className={`profile__icon ${getProfileIconClass()}`}>
      {getInitials()}
    </div>
  );
}
