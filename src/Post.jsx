import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostAuthor } from "./PostAuthorContext";
import Comment from "./Comment";

function Post() {
  const { id } = useParams();
  const { posts, setPosts, contacts, setContacts, setAuthor } = usePostAuthor();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const post = posts.find((p) => p.id === Number(id));
    if (post) {
      setAuthor(contacts[post.contactId]);
      setComments(post.comments || []);
    } else {
      fetch(`https://boolean-uk-api-server.fly.dev/olaolumcpaul/post/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts((prevPosts) => [...prevPosts, data]);
          return data.contactId;
        })
        .then((contactId) =>
          fetch(
            `https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact/${contactId}`
          )
        )
        .then((response) => response.json())
        .then((data) => {
          setContacts((prevContacts) => ({ ...prevContacts, [data.id]: data }));
          setAuthor(data);
        })
        .catch((error) => console.error("Error fetching post:", error));

      fetch(
        `https://boolean-uk-api-server.fly.dev/olaolumcpaul/post/${id}/comment`
      )
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [id, posts, setAuthor, setContacts, setPosts, contacts]);

  if (!contacts[id]) return <div>Loading...</div>;

  return (
    <div>
      <div className="post-author">
        <div className="author-initials">
          {contacts[id]?.name ? contacts[id].name[0] : ""}
        </div>
        {contacts[id]?.name || "Loading..."}
      </div>
      <h2>{posts.find((p) => p.id === Number(id))?.title || ""}</h2>
      <p>{posts.find((p) => p.id === Number(id))?.body || ""}</p>
      <Comment postId={id} setComments={setComments} />
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment-author">
            <div className="author-initials">
              {contacts[comment.contactId]?.name
                ? contacts[comment.contactId].name[0]
                : ""}
            </div>
            {contacts[comment.contactId]?.name || "Loading..."}
          </div>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
