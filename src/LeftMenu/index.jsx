import { useNavigate } from "react-router-dom";
import "./index.css";

export default function LeftMenu() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/");
    };

    return (
      <nav className="sidebar">
        <button className="button" onClick={goToHomePage}>
          <svg
            className="sidebar_icon .action:hover"
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 36V12L16.6 0L32.5 12V36H20.8V21.75H12.15V36H0.5Z"
              fill="#64648C"
            />
          </svg>
          <p>Home</p>
        </button>
      </nav>
    );
}
