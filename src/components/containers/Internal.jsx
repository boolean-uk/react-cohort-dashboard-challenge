function Internal({ className, children }) {
  return (
    <div className={className ? `internal ${className}` : "internal"}>
      {children}
    </div>
  );
}

export default Internal;
