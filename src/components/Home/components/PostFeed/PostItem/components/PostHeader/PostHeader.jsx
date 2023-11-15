import { useEffect, useState } from "react";

import PostTitle from "./PostTitle";

import PulseLoader from "@components/Loader/PulseLoader";
import UserIcon from "@components/UserIcon";
import UserName from "@components/UserName";

import api from "@utilities/api";
import { postProps } from "@utilities/propTypeDefs";

import "./PostHeader.css";

export default function PostHeader({ editablePost, field, formData, post, setFormData, submitted }) {
  const [contact, setContact] = useState(null);

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
      <PostTitle
        postId={post.id}
        title={post.title}
        editablePost={editablePost}
        field={field}
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
      />
    </header>
  );
}

PostHeader.propTypes = { post: postProps };
