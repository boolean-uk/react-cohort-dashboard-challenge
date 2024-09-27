import UserIcon from "@components/UserIcon";

import { contactProps, funcProp } from "@utilities/propTypeDefs";
import NewPostForm from "./components/NewPostForm";

export default function NewPost({ setLoadPosts, user }) {
  return (
    <section className="new-post app-card flex gap-4">
      <UserIcon contact={user} />
      <NewPostForm user={user} setLoadPosts={setLoadPosts} />
    </section>
  );
}

NewPost.propTypes = {
  setLoadPosts: funcProp,
  user: contactProps,
};
