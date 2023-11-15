import { useState, useEffect } from "react";
import { Link } from "react";
import Header from "../Header/Header";
import ContactId from "../Header/ContactId";
import Comments from "./Comments";
import AddComment from "./AddComment";

function Post() {
  const [allPosts, setAllPosts] = useState([]);

  const URL = "https://boolean-api-server.fly.dev/LAVINIABENZAR/POST";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAllPosts(data));
  }, []);

  return (
    <div className="allposts">
      {allPosts.map((post) => (
        <div key={post.id}>
          <h3>
            <ContactId post={post} />
          </h3>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <h4>
            <Comments post={post} />
          </h4>
          <AddComment />
        </div>
      ))}
    </div>
  );
}

export default Post;
