export default function ProfileIcon({ contact }) {
  return (
    <div className="profile-icon">
      {!contact.id
        ? "..."
        : contact.firstName.charAt(0) + contact.lastName.charAt(0)}
    </div>
  );
}
