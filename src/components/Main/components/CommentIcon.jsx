function CommentIcon({ loggedInUserInitials }) {
  return (
    <div className="profile-circle">
      <p>{loggedInUserInitials}</p>
    </div>
  );
}

export default CommentIcon;
