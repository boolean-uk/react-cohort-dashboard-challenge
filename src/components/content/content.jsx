import { useEffect, useState } from "react";

import CreatePost from "./subcomponents/createPost";
import Post from "./subcomponents/post";
import { get } from "../controller";

const postApi = "https://boolean-api-server.fly.dev/Radio58/post";
const contApi = "https://boolean-api-server.fly.dev/Radio58/contact";

export default function Content({contacts, setContacts, setActivePost, user, setUser}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get(contApi).then((data) => setContacts(data));
    
    get(postApi).then((data) => setPosts(data));
    
    get(`${contApi}/1`).then((data) => setUser(data));

  }, []);
  
  if (!posts.length || !contacts.length) {
    return <p>LOADING</p>;
  }
  const reversedPosts = posts.toReversed();

  return (
    <>
      <main className="content">
        <CreatePost
          user={user}
          setPosts={setPosts}
          posts={posts}
        />
        <div className="post-container">
          {reversedPosts.map((post) => { 
            const userInfo = contacts.find(cont => cont.id === post.contactId)

            return (
            <Post
              postInfo={post}
              userInfo={userInfo}
              contacts={contacts}
              setActivePost={setActivePost}
              key={post.id} 
            />
            
            )
          })}
        </div>
      </main>
    </>
  );
}
