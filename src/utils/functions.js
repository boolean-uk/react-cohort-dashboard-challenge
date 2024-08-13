export function getInitials(user = { firstName: "", lastName: "" }) {
  const userName = user.firstName.charAt(0) + user.lastName.charAt(0);
  if (userName === undefined) return "";
  return userName;
}

export const GetNames = (id, contacts) => {
  const user = contacts.find((c) => c.id === id);
  if (user === undefined) return "";
  const userName = user.firstName + " " + user.lastName;
  return userName;
};

export const GetCMInitials = (id, contacts) => {
  const user = contacts.find((c) => c.id === id);
  if (user === undefined) return "";
  const userName = user.firstName.charAt(0) + user.lastName.charAt(0);
  return userName;
};
