function Button({ onClick, children }) {
  return (
    <button className="cohort-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
