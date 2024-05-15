/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function CommentSection({ post, comment }) {
  const [comments, setComments] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    getComments();
  }, [comment]);

  const getComments = async () => {
    const data = await fetch(`https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}/comment`);
    const json = await data.json();
    setComments(json);
  };

  function handleClick() {
    setSeeAll(!seeAll);
  }

  if (comments.length < 4 || seeAll === true) {
    return (
      <>
        {seeAll ? (
          <p onClick={handleClick} className="cursor-pointer ml-2 mt-2 text-inputGrey">
            Hide previous comments
          </p>
        ) : null}
        <section className="flex flex-col gap-2 m-2">
          {comments.map((comment, index) => {
            return <Comment key={index} comment={comment} post={post} getComments={getComments}/>;
          })}
        </section>
      </>
    );
  }

  const latestThreeComments = comments.slice(comments.length -3, comments.length);
  return (
    <>
      <p onClick={handleClick} className="cursor-pointer ml-2 mt-2 text-inputGrey">
        See previous comments
      </p>
      <section className="flex flex-col gap-2 m-2">
        {latestThreeComments.map((comment, index) => {
          return <Comment key={index} comment={comment} post={post} getComments={getComments}/>;
        })}
      </section>
    </>
  );
}
