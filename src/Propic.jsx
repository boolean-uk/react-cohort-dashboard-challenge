import "./Propic.css";

export default function Propic({ contact }) {
  let initialOne = contact.firstName.charAt(0);
  let initialTwo = contact.lastName.charAt(0);
  let initials = initialOne.concat(initialTwo);
  return (
    <h3
      className="profile-picture"
      style={{ backgroundColor: contact.favouriteColour }}
    >
      {initials}
    </h3>
  );
}
