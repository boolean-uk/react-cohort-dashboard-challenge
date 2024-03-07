import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { TempContext } from "./../../App";
import CommentList from "../Comments/CommentList";
import CreateComment from "../Comments/CreateComment";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    id: 0,
  });
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
    favouriteColour: "#00FF00",
  });
  const { contactData, postData } = useContext(TempContext);

  useEffect(() => {
    if(postData.find((p) => p.id == id) != undefined){
      console.log(postData.find((p) => p.id == id))
      setPost(postData.find((p) => p.id == id));
    }
  }, [postData]);
  
  useEffect(() => {
    if(contactData.find((c) => c.id == post.contactId) != undefined){
      console.log(contactData.find((c) => c.id == post.contactId))
      setAuthor(contactData.find((c) => c.id == post.contactId));
    }
  }, [contactData, post]);
  
  useEffect(() => {
    // console.log("post",post)
    // console.log("postData",postData.find((p) => p.id == id))
  }, [post, postData]);

  return (
    <li className="createPost">
      <div className="post">
        <div className="post-header">
          <div
            className="profileIcon"
            style={{ background: author.favouriteColour }}
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
            >
              {post.title}
            </h3>
          </div>
        </div>

        <p>{post.content}</p>
      </div>
      <CommentList id={id} hide={false}/>
    </li>
  );
}

export default PostPage;
