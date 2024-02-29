import { useNavigate } from "react-router-dom";
import "../styles/ProfileCircle.css";

export default function ProfileCircle({ fullname, contactId }) {
  const fullnameSplit = fullname.split(" ");
  const navigate = useNavigate();

  const initialsColorSelector = (initials) => {
    let sum = 0;
    for (let i = 0; i < initials.length; i++) {
      const binary = initials.charCodeAt(i).toString(16);
      const random = Math.floor(Math.sin(binary) * 1000000);
      sum += Math.abs(random);
    }
    return "#" + sum.toString(16).slice(0, 6);
  };

  const initials = fullnameSplit[0][0] + fullnameSplit[1][0];

  return (
    <div
      className="circle"
      style={{ backgroundColor: initialsColorSelector(initials) }}
      onClick={() => navigate(`/profile/${contactId}`)}
    >
      <p>{initials}</p>
    </div>
  );
}
