import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../App";
import UserIcon from "./UserIcon";
import PostItem from "./PostItem";

export default function DisplayPost() {
   const { allPosts, setAllPosts, loggedInUser, sortedPosts } = useContext(appContext);
  const {id} = useParams();
  const [personInfo, setPersonInfo] = useState(null)

  const post = allPosts.find((p) => p.id === Number(id));
  console.log("post", post);

  return (
    <section className="display-post">
      { post && (
        <PostItem post={post}/>
      )}
    </section>
  );
}
