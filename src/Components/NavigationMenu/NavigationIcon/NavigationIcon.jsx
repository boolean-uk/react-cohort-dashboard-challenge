import { useNavigate } from "react-router-dom";
import "./NavigationIcon.css";

function NavigationIcon({ img, title, selected, navigateLink }) {
  const nav = useNavigate();

  const navigateTo = () => nav(navigateLink);

  let classes = "d-flex flex-column align-items-center px-5 py-2 pt-4 ";
  selected ? (classes += "selected") : "";
  return (
    <div onClick={navigateTo} className={classes}>
      <img src={img} width={24} />
      <p>{title}</p>
    </div>
  );
}

export default NavigationIcon;
