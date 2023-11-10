import NewPost from "./components/NewPost/NewPost";
import PostFeed from "./components/PostFeed/PostFeed";

import { contactProps } from "@utilities/propTypeDefs";

export default function Home({ user }) {
  return (
    <section className="app-main bg-cohort-background">
      <NewPost user={user}/>
      <PostFeed />
    </section>
  );
}

Home.propTypes = {
  user: contactProps,
};
