import require 
const { users } = require("./users")

export default function ProfileImg({userId, size}) {
  
  // random background color
  const styles = { backgroundColor: `hsl(${Math.random()*360}, 60%, 50%)` };

  return (
    <div className={`profile-img ${size}`} style={styles} >
      {userId}
    </div>
  )
}