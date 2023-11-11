import { useState, useEffect } from "react";
import { Link } from "react";
import Header from "../Header/Header";

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
     {allPosts.map(post => (
       <div key={post.id}>
        <p>{post.title}</p>
        <p>{post.content}</p>
       </div>
     ))}
    </div>
  );
}



export default Post;
