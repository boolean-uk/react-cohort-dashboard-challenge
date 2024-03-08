import { useContext } from "react";
import CohortLogo from "../assets/title-header.svg";
import { UserContext } from "../App";
import CommentProfile from "./CommentProfile";

function Header() {
  const { users } = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={CohortLogo} alt="logo" style={{ width: "200px" }} />
      <CommentProfile user={users}></CommentProfile>
    </header>
  );
}

export default Header;
