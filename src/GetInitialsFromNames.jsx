function GetInitalsFromNames(firstName, lastName) {
  const Initials = firstName.charAt(0) + lastName.charAt(0);
  return Initials.toString().toUpperCase();
}
export default GetInitalsFromNames;
