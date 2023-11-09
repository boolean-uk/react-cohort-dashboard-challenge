export default function ProfileIcon({ contact }) {
  return (
    <div
      className={`profile-icon ${
        contact.id % 2 == 0 ? "color-one" : "color-two"
      }`}
    >
      {!contact.id
        ? "..."
        : contact.firstName.charAt(0) + contact.lastName.charAt(0)}
    </div>
  );
}
