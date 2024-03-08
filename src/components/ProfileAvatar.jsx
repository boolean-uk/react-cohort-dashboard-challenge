import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";

export default function ProfileAvatar({ user, className }) {
  const navigate = useNavigate();
    const setCurrentTab = useContext(DataContext).setCurrentTab;

  return (
          <div
            onClick={() => {setCurrentTab("profile"); navigate("profile/" + user.id);}}
            className={className}
            style={{ background: user.favouriteColour }}
          >
            {user.firstName[0] + user.lastName[0]}
          </div>


  )
}
