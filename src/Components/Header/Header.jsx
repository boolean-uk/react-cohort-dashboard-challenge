import "./Header.css";
import headerImg from "../../assets/title-header.svg";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
function Header() {
  return (
    <div className="header d-flex align-items-center justify-content-between py-4">
      <div className="d-flex mx-3 my-5">
        <img className="mx-3 my-5" height={42} src={headerImg} />
      </div>
      <div className="d-flex mx-3 my-5">
        <ProfileCircle />
      </div>
    </div>
  );
}

export default Header;
