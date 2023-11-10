import UserIcon from "@components/UserIcon";

import { contactProps } from "@utilities/propTypeDefs";
import NewPostForm from "./components/NewPostForm";

export default function NewPost({ user }) {
  return (
    <section className="new-post">
      <UserIcon contact={user} />
      <NewPostForm />
    </section>
  );
}

NewPost.propTypes = {
  user: contactProps,
};
