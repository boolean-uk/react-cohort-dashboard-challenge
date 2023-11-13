import { useNavigate } from "react-router-dom";

export default function ProfileImg({initials, contactId, size}) {

  const navigate = useNavigate()
  const styles = { backgroundColor: `hsl(${contactId/15*360}, 70%, 50%)` };

  const navLink = contactId === 1 ? "/profile" : "/user/"+contactId

  return (
    <div className={`profile-img ${size}`} style={styles} onClick={() => navigate(navLink)}>
      {initials}
    </div>
  )
}