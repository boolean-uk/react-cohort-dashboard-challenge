export default function ProfileIcon({ contact, user }) {
  return (
    <div className="profile-icon">
      {!contact
        ? user
        : contact.firstName?.charAt(0) + contact.lastName?.charAt(0)}
    </div>
  );
}
