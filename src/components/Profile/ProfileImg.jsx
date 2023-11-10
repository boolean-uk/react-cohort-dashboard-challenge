export default function ProfileImg({firstName, lastName}) {
  
  // random background color
  const styles = { backgroundColor: `hsl(${Math.random()*360}, 60%, 50%)` };

  return (
    <div className="profile-img" style={styles} >
      {firstName[0] + lastName[0]}
    </div>
  )
}