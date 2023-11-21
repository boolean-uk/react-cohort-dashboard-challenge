import { useEffect, useState } from "react";

import PostTitle from "./PostTitle";

import PulseLoader from "@components/Loader/PulseLoader";
import UserIcon from "@components/UserIcon";
import UserName from "@components/UserName";

import api from "@utilities/api";
import { postProps } from "@utilities/propTypeDefs";

import "./PostHeader.css";

export default function PostHeader({ post }) {
  const [contact, setContact] = useState(null);

  const { id, title } = post;

  useEffect(() => {
    async function getPerson() {
      const fetch = await api.contact.get(post.contactId);
      setContact(await fetch);
    }
    getPerson();
  }, [post.contactId, post.id]);

  if (!contact) {
    return <PulseLoader />;
  }

  return (
    <header className="post-header grid items-center gap-x-4">
      <UserIcon contact={contact} />
      <UserName contact={contact} />
      <PostTitle postId={id} title={title} />
    </header>
  );
}

PostHeader.propTypes = { post: postProps };
