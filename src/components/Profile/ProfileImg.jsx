export default function ProfileImg({initials, contactId, size}) {

  const styles = { backgroundColor: `hsl(${contactId/15*360}, 70%, 50%)` };

  return (
    <div className={`profile-img ${size}`} style={styles} >
      {initials}
    </div>
  )
}