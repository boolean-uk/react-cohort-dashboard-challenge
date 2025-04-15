import { Link } from "react-router-dom";

const Avatar = ({
  initials,
  bgColor,
  textColor = "var(--primary)",
  to = "/",
}) => {
  return (
    <Link to={to}>
      <div
        className="avatar"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {initials}
      </div>
    </Link>
  );
};

export default Avatar;
