import { useEffect, useState } from "react";

import PostTitle from "./PostTitle";
import PulseLoader from "../../../../../Loader/PulseLoader";
import UserIcon from "../../../../../UserIcon";
import UserName from "../../../../../UserName";

import api from "../../../../../../utilities/api";
import { postProps } from "../../../../../../utilities/propTypeDefs";

import "./PostHeader.css";

export default function PostHeader({ post }) {
  const [contact, setContact] = useState(null);

  const { title } = post;

  useEffect(() => {
    async function getPerson() {
      const fetch = await api.contact.get(post.id);
      setContact(await fetch);
    }
    getPerson();
  }, [post.id]);

  if (!contact) {
    return <PulseLoader />;
  }

  return (
    <header className="post-header grid items-center gap-x-4">
      <UserIcon contact={contact} />
      <UserName contact={contact} />
      <PostTitle title={title} />
    </header>
  );
}

PostHeader.propTypes = { post: postProps };
