import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import CommentProfile from "./CommentProfile";

function ProfileWithFullText({ user}) {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "1rem" }}>
        <CommentProfile user={user}></CommentProfile>
      </div>
      <div>
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          {users.firstName} {users.lastName}
        </p>
      </div>
    </div>
  );
}

export default ProfileWithFullText;
