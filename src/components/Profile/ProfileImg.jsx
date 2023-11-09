export default function ProfileImg({firstName, lastName}) {
  
  const styles = { backgroundColor: `hsl(${Math.random()*360}, 60%, 50%)` };

  return (
    <div className="profileImg" style={styles} >
      {firstName[0] + lastName[0]}
    </div>
  )
}