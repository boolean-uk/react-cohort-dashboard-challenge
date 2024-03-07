function AuthorCircle({ initials, style }) {
  return (
    <div className="initials-circle large" style={style}>
      {initials}
    </div>
  );
}

export default AuthorCircle;
