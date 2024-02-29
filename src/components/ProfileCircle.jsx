import { useNavigate } from "react-router-dom";
import "../styles/ProfileCircle.css";

export default function ProfileCircle({ fullname, color, contactId }) {
  const fullnameSplit = fullname.split(" ");
  const navigate = useNavigate();

  const initials = fullnameSplit[0][0] + fullnameSplit[1][0];

  return (
    <div
      className="circle"
      style={{ backgroundColor: color || "var(--secondary)" }}
      onClick={() => navigate(`/profile/${contactId}`)}
    >
      <p>{initials}</p>
    </div>
  );
}
