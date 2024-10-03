import { useContext, useEffect, useState } from "react";
import { ContactProps, PostProps } from "../common/types";
import Comments from "./comments/Comments";
import PostHeader from "./PostHeader";
import { mockContact } from "../common/mock";
import { PostsContext } from "./Posts";

export default function Post({ id }: PostProps) {
  const [posts, _] = useContext(PostsContext);
  const post = posts.find((p) => p.id === id)!;
  const [contact, setContact] = useState(mockContact);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/hermagst/contact/${post.contactId}`,
    )
      .then((res) => res.json())
      .then((contact: ContactProps) => setContact(contact));
  }, [id]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <PostHeader
        title={post.title}
        contact={contact}
        id={id}
        contactId={post.contactId}
      />

      <p className="text-gray-700 mb-4">{post.content}</p>

      <Comments postId={id} />
    </div>
  );
}
