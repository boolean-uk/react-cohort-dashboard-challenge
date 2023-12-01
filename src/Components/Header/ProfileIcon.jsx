import { useState, useEffect } from "react";

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const ProfileIcon = ({ contact }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {    
    setUser({
      id: "user123", 
    });
  }, [contact]);

  const getBackgroundColor = () => {
    if (user) {

      const userId = user.id || '';
      return { backgroundColor: getRandomColor() + userId }; 
    }
    return { backgroundColor: getRandomColor() }; 
  };

  return (
    <div
      className="profile-icon"
      style={{
        color: "#fff", 
        ...getBackgroundColor(),
      }}
    >
      {!contact ? "..." : contact.firstName.charAt(0) + contact.lastName.charAt(0)}
    </div>
  );
};

export default ProfileIcon;