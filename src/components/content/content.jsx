import { useEffect, useState, useContext } from "react";

import { appContext } from '../../App'
import CreatePost from "./subcomponents/createPost";
import Post from "./subcomponents/post";
import { get } from "../controller";

const postApi = "https://boolean-api-server.fly.dev/Radio58/post";
const contApi = "https://boolean-api-server.fly.dev/Radio58/contact";


export default function Content() {
  const [posts, setPosts] = useState([]);
  
  const { contacts, setContacts, setActivePost, user, setUser } = useContext(appContext)

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
        />
        <div className="post-container">
          {reversedPosts.map((post) => { 
            const userInfo = contacts.find(cont => cont.id === post.contactId)

            return (
            <Post
              postInfo={post}
              userInfo={userInfo}
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
