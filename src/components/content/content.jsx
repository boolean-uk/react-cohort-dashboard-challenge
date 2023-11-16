import { useEffect, useState } from "react";
import { get } from "../controller";
import CreatePost from "./subcomponents/createPost";

const postApi = "https://boolean-api-server.fly.dev/Radio58/post";
const contApi = "https://boolean-api-server.fly.dev/Radio58/contact";

import Post from "./subcomponents/post";

export default function Content({user, posts, setPosts, contacts, setContacts}) {
  useEffect(() => {
    get(contApi).then((data) => setContacts(data));

    get(postApi).then((data) => setPosts(data));
  }, []);

  if (!posts.length || !contacts.length) {
    return <p>a</p>;
  }
  const reversedPosts = posts.toReversed();

  return (
    <>
      <main className="content">
        <CreatePost />
        <div className="post-container">
          {reversedPosts.map((post) => { 
            const userInfo = contacts.find(cont => cont.id === post.contactId)
            return <Post post={post} userInfo={userInfo} key={post.id} />;
          })}
        </div>
      </main>
    </>
  );
}
