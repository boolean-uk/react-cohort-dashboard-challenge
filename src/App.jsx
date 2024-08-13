import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/homepage/HomePage";
import { PostPage } from "./components/postpage/PostPage";

function App() {
  const contactUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/contact";
  const postUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/post";

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch(postUrl);
        const postsData = await postsResponse.json();
        setPosts(postsData);

        for (const post of postsData) {
          const commentsResponse = await fetch(`${postUrl}/${post.id}/comment`);
          const commentsData = await commentsResponse.json();
          setComments((prevComments) => ({
            ...prevComments,
            [post.id]: commentsData,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch(contactUrl)
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  const currentUser = contactUrl.length > 0 ? contacts[0] : null;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              currentUser={currentUser}
              contacts={contacts}
              comments={comments}
              posts={posts}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <PostPage
              currentUser={currentUser}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
