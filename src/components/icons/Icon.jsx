function Icon({ label, children }) {
  return (
    <div className={"container"}>
      {children}
      {label && <div className="icon-label">{label}</div>}
    </div>
  );
}

export default Icon;
