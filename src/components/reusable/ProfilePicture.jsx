
// Should have used Avatar like some of the others, but now i don't have the time
// Takes user 
function ProfilePicture(props) {
  if(props.user == undefined) {
    return (
      <></>
    )
  }
  const initials = `${props.user.firstName.toUpperCase().charAt(0)}${props.user.LastName.toUpperCase().charAt(0)}`

  return (
    <div className="profile-picture-container">
      <div className='profile-picture-circle'>
        <span className='profile-picture-initials'>{initials}</span>
      </div>
    </div>
  );
}



export default ProfilePicture;
