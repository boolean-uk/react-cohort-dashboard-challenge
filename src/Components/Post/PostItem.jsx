import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TempContext } from "./../../App";
import CommentList from "../Comments/CommentList";

function PostItem({ post }) {
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
    favouriteColour: "#00FF00",
  });
  const { contactData, setCurrentTab } = useContext(TempContext);
  const url = "/post/" + post.id;
  const navigate = useNavigate();

  useEffect(() => {
    if(contactData.find((contact) => contact.id == post.contactId) != undefined){

      setAuthor(contactData.find((contact) => contact.id == post.contactId));
    }
  }, [contactData, post]);

  return (
    <li className="createPost">
      <div className="post">
        <div className="post-header">
          <div
            className="profileIcon"
            style={{ background: author.favouriteColour }}
            onClick={() => {
              setCurrentTab("profile");
              navigate(`/profile/${author.id}`);
            }}
          >
            {author.firstName[0]}
            {author.lastName[0]}
          </div>
          <div>
            <h2>
              {author.firstName} {author.lastName}
            </h2>

            <h3
              className="post-title"
              onClick={() => {
                setCurrentTab(url)
                navigate(url);
              }}
            >
              {post.title}
            </h3>
          </div>
        </div>

        <p>{post.content}</p>
      </div>
      <CommentList id={post.id} hide={true} />
    </li>
  );
}

export default PostItem;
