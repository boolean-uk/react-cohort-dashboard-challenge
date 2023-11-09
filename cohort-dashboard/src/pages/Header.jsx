import titleHeaderLogo from "../assets/title-header-svg.svg";

export default function Header({ user }) {
  return (
    <header>
      <img src={titleHeaderLogo} alt="title-header-logo" width={340} />
      <div className="profile-icon">
        {!user.id ? "..." : user.firstName.charAt(0) + user.lastName?.charAt(0)}
      </div>
    </header>
  );
}
