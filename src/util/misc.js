function getInitialsFromUser(user) {
  return user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();
}

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

export { getInitialsFromUser, getFullName };
