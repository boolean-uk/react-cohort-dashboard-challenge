export default function NavButton({ buttonType, selected }) {
  let classNames = selected ? "nav-button selected" : "nav-button";

  return (
    <div className={classNames}>
      <img
        src={`src/assets/${buttonType.toLowerCase()}-icon.svg`}
        alt={buttonType}
      />
      <h3>{buttonType}</h3>
    </div>
  );
}
