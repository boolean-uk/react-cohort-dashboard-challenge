function AuthorCircle({ initials, style }) {
  return (
    <div className="initials-circle large author-circle" style={style}>
      {initials}
    </div>
  );
}

export default AuthorCircle;
