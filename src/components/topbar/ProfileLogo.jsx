
// Assuming this is your component in ProfileLogo.jsx
import React from 'react';

const ProfileLogo = () => {
  // Your data, in this case, 'str'
  const str = undefined;

  // Check if 'str' is defined before accessing 'charAt(0)'
  const char = str ? str.charAt(0) : null;

  return (
    <div>
      {/* Render the 'char' variable or handle the null case accordingly */}
      <p>First character: {char !== null ? char : 'N/A'}</p>
    </div>
  );
};

export default ProfileLogo;
