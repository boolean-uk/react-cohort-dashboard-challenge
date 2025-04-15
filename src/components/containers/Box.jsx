function Box({ className, children }) {
  return (
    <div className={className ? `box ${className}` : "box"}>{children}</div>
  );
}

export default Box;
