import React from 'react';

function InitialCircle({ contact }) {

  const name = contact.firstName + ' ' + contact.lastName
  function getInitials(name) {
    const names = name.split(' ');
    const initials = names.map(name => name.charAt(0).toUpperCase()).join('');
    return initials;
  }
  const initials = getInitials(name)

  return (
    <div className="profile-picture" style={{ backgroundColor: contact.favouriteColour }}>
      {initials}
    </div>
  );
}


export default InitialCircle;
