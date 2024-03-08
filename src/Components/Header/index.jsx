import HeaderSvg from "./HeaderSvg.jsx";
import { useContext } from "react";
import { MyContext } from "../../App.jsx";
import { useNavigate, Link } from "react-router-dom";
export default function Header() {
  const { currentUser, setCurrentUser } = useContext(MyContext);
  const navigate = useNavigate();
  const handleOnclick = () => {
    localStorage.removeItem("loggedInId");
    navigate(`/`);
    setCurrentUser(null);
  };

  const indexFirst = currentUser.firstName[0];
  const indexLast = currentUser.lastName[0];
  return (
    <header className="header">
      <HeaderSvg />
      <div className="dummydiv"></div>
      <Link to={`/profile/${currentUser.id}`}>
        <div
          className="profile-icon-div"
          style={{
            backgroundColor: currentUser.favouriteColour,
          }}
        >
          {indexFirst} {indexLast}
        </div>
      </Link>
      <button className="logout" onClick={handleOnclick}>
        Log out
      </button>
    </header>
  );
}
