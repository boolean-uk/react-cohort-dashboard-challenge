import usePosts from "../hooks/usePosts";
import Post from "./Post";

export default function Posts() {
  const {posts} = usePosts()

  if (!posts) {
    return <p>Loading</p>;
  }

  return (
    <ul className="grid grid-flow-row gap-2 ">
      {posts
        .slice()
        .reverse()
        .map((post, i) => {
          const posterId = post.contactId;
          return <Post key={i} post={post} posterId={posterId} />;
        })}
    </ul>
    // <ul className="grid grid-flow-row gap-2 ">
    //   {[...posts]
    //     .sort((a, b) => b.id - a.id)
    //     .map((post, i) => {
    //       const posterId = post.contactId;
    //       return <Post key={i} post={post} posterId={posterId} />;
    //     })}
    // </ul>
  );
}
