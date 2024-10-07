import { useContext, useEffect, useState } from "react";
import InputField from "../../inputFields/InputFields";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import Comments from "../comments/comments";
import { PostContext, UserContext } from "../../../App";
import { useParams } from "react-router-dom";

export default function SinglePost({posts}) {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");

  const { id } = useParams();

  const fetchPost = async () => {
    const targetPost = posts.find((p) => p.id === parseInt(id))
    setPost(targetPost)
    fetchUser(targetPost.contactId)
  };

  const fetchUser = async (id) => {
      await fetch(
        `https://boolean-uk-api-server.fly.dev/valen98/contact/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setFirstname(data.firstName);
          setLastName(data.lastName);
          setFavouriteColour(data.favouriteColour);
        });
  };

  useEffect(
    () =>
      async function () {
        await fetchPost()
      },
    []
  );

  return (
    <div className="postItemParent">
      <div className="postOwner">
        <div className="ownerIcon">
          <ProfileIcon
            letters={firstname.charAt(0) + lastName.charAt(0)}
            setFavouriteColour={favouriteColour}
          />
        </div>
        <div className="postName">
          <div className="name">
            <h2>
              {firstname} {lastName}
            </h2>
          </div>
          <div className="title">
            <h3>{post.title}</h3>
          </div>
        </div>
      </div>
      <div className="postContent">
        <p>{post.content}</p>
      </div>
      <hr className="line" />
      <div className="commentSection">
        <Comments postId={id} currentUser={userContext.currentUser} />
      </div>
    </div>
  );
}
