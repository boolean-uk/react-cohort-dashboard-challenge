import { useContext, useEffect, useState } from "react";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import { UserContext } from "../../../App";

export default function Comment({ comment }) {
  const userContext = useContext(UserContext);

  const [user, setUser] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const user = userContext.users.find((u) => u.id === comment.contactId);
    setFirstname(user.firstName);
    setLastName(user.lastName);
    setFavouriteColour(user.favouriteColour);
    setUserId(user.id)
  }, []);

  return (
    <div className="commentBody">
      <div className="commentProfileIcon">
        <ProfileIcon
          letters={firstname.charAt(0) + lastName.charAt(0)}
          setFavouriteColour={favouriteColour}
          id={parseInt(userId)}
        />
      </div>
      <div className="commentContent">
        <div className="commentName">
          <h4>
            {user.firstName} {user.lastName}
          </h4>
        </div>
        <div className="content">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
