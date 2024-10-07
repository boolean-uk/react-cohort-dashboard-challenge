import { useEffect, useState } from "react";
import CommentSection from "../CommentsSection";
import AddComment from "./AddComment";
import PostOverview from "./PostOverview";

export default function PostContainer({ post }) {
  const [creator, setCreator] = useState();

  const fetchCreator = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${post.contactId}`
    );
    const data = await response.json();
    setCreator(data);
  };

  useEffect(() => {
    fetchCreator();
  }, []);

  console.log('hit')
  console.log(creator);

  return (
    <>
      <div className="post-container">
        {creator && post &&(
          <>
            <PostOverview post={post} match={creator} />

            <hr width="100%" size="2" />
            <CommentSection post={post} />
           

          </>
        )}
      </div>
    </>
  );
}
