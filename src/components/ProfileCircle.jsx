import { useNavigate } from "react-router-dom";
import "../styles/ProfileCircle.css";

export default function ProfileCircle({ fullname, color, contactId }) {
  const fullnameSplit = fullname.split(" ");
  const navigate = useNavigate();

  return (
    <div
      className="circle"
      style={{ backgroundColor: color }}
      onClick={() => navigate(`/profile/${contactId}`)}
    >
      <p>
        {fullnameSplit[0][0]}
        {fullnameSplit[1][0]}
      </p>
    </div>
  );
}
