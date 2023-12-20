import "./postSomething.css";
import PostSomething from "./PostSomething";
import PeoplePost from "./PeoplePost";
import { useState, useEffect } from "react";
const MainPage = ({ loggedInUser }) => {
  const [posts, setPosts] = useState([]);
  // console.log("if", loggedInUser);

  const getData = () => {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/post`)
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.reverse();
        setPosts(sortedData);
        // console.log(sortedData);
      });
  };
  useEffect(getData, []);

  // console.log(posts[posts.length - 1].contactId);
  return (
    <div className='mainPage'>
      <PostSomething
        loggedInUser={loggedInUser}
        getData={getData}
        post={posts}
      />
      <PeoplePost
        loggedInUser={loggedInUser}
        posts={posts}
        setPosts={setPosts}
      />
    </div>
  );
};

export default MainPage;
