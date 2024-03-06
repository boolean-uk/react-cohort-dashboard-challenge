import { DataContext } from "../../../App";
import { useContext, useState, useEffect } from "react";

export default function PostHeader({ post }) {
  const user = useContext(DataContext).user;
  const setPosts = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const [postUser, setPostUser] = useState(null);

  useEffect(() => {
    if (!post.user) {
      fetch(
        "https://boolean-api-server.fly.dev/pkekkonen/contact/" +
          post.contactId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
                        console.log(response);

          return response.status === 200? response.json() : null;
        })
        .then((userData) => {
           setPostUser(userData);
        });
    }
  }, []);

  return (
    <>
      {postUser && (
        <div className="post">
          <img src={postUser.profileImage}></img>
          <p>{postUser.firstName + " " + postUser.lastName}</p>
          <p>{post.title}</p>
        </div>
      )}
      {!postUser && (
        <div className="post">
          <p>anonymous</p>
          <p>{post.title}</p>
        </div>
      )}
    </>
  );
}
