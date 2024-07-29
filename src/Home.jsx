import React, { useEffect } from "react";
import PostList from "./PostList";
import { usePostAuthor } from "./PostAuthorContext";

function Home() {
  const { posts, setPosts, contacts, setContacts } = usePostAuthor();

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/olaolumcpaul/post")
      .then((response) => response.json())
      .then((data) => {
        const fetchComments = data.map((post) =>
          fetch(
            `https://boolean-uk-api-server.fly.dev/olaolumcpaul/post/${post.id}/comment`
          )
            .then((response) => response.json())
            .then((comments) => ({ ...post, comments }))
        );
        return Promise.all(fetchComments);
      })
      .then((postsWithComments) => setPosts(postsWithComments))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [setPosts]);

  useEffect(() => {
    const fetchContacts = async () => {
      const contactPromises = posts.map((post) => {
        if (!contacts[post.contactId]) {
          return fetch(
            `https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact/${post.contactId}`
          )
            .then((response) => response.json())
            .then((data) => ({ id: post.contactId, data }));
        }
        return Promise.resolve(null);
      });
      const contactResults = await Promise.all(contactPromises);
      const contactMap = contactResults.reduce((acc, contact) => {
        if (contact) {
          acc[contact.id] = contact.data;
        }
        return acc;
      }, {});
      setContacts((prevContacts) => ({ ...prevContacts, ...contactMap }));
    };
    fetchContacts();
  }, [posts, contacts, setContacts]);

  return (
    <main className="main-body">
      <PostList />
    </main>
  );
}

export default Home;
