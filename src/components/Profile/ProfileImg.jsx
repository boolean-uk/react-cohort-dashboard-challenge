export default function ProfileImg({initials, size}) {
  // random background color
  const styles = { backgroundColor: `hsl(${Math.random()*360}, 70%, 50%)` };

  return (
    <div className={`profile-img ${size}`} style={styles} >
      {initials}
    </div>
  )
}