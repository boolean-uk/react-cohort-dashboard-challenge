import { useContext, useEffect, useState } from "react";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import Comments from "../comments/comments";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  const userContext = useContext(UserContext);
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");
  const [userId, setUserId] = useState("")

  const fetchUser = async () => {
    const user = await userContext.users.find((u) => u.id === post.contactId);
    
    setFirstname(user.firstName);
    setLastName(user.lastName);
    setFavouriteColour(user.favouriteColour);
    setUserId(user.id)
  };

  useEffect(() => async function() {
    await fetchUser();
  }, []);

  

  return (
    <div className="postItemParent">
      <div className="postOwner">
        <div className="ownerIcon">
          <ProfileIcon
            letters={firstname.charAt(0) + lastName.charAt(0)}
            setFavouriteColour={favouriteColour}
            id={parseInt(userId)}
          />
        </div>
        <div className="postName">
          <div className="name">
            <h2>
              {firstname} {lastName}
            </h2>
          </div>
          <div className="title">
            <Link to={`/view/${post.id}`}> {post.title} </Link>
          </div>
        </div>
      </div>
      <div className="postContent">
        <p>{post.content}</p>
      </div>
      <hr className="line" />
      <div className="commentSection">
        <Comments postId={post.id} currentUser={userContext.currentUser} />
      </div>
    </div>
  );
}
