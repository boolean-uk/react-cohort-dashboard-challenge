import { useEffect, useState } from "react";
import { useParams } from "react-router";

import PostHeader from "./components/PostHeader/PostHeader";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed/PostCommentFeed";
import NewComment from "./components/NewComment/NewComment";

import PulseLoader from "@components/Loader/PulseLoader";

import api from "@utilities/api";
import { contactProps, postProps } from "@utilities/propTypeDefs";

export default function PostItem({ postProp, user }) {
  const [post, setPost] = useState(null);

  const [loadPost, setLoadPost] = useState(false);
  const [loadComments, setLoadComments] = useState(true);

  const { postIdParam } = useParams();

  useEffect(() => {
    async function getPost() {
      const fetch = await api.post.get(postIdParam);
      setPost(fetch);
      setLoadPost(false);
    }
    loadPost && getPost();
  }, [postIdParam, loadPost]);

  useEffect(() => {
    if (postIdParam) {
      setLoadPost(true);
    } else if (postProp) {
      setPost(postProp);
    }
  }, [postIdParam, postProp]);

  if (!post) {
    return <PulseLoader />;
  }

  return (
    <li className="post-item app-card flex flex-col gap-4">
      <PostHeader post={post} />
      <PostBody content={post.content} />
      <PostCommentFeed
        loadComments={loadComments}
        postId={post.id}
        setLoadComments={setLoadComments}
      />
      <NewComment
        user={user}
        postId={post.id}
        setLoadComments={setLoadComments}
      />
    </li>
  );
}

PostItem.propTypes = { postProp: postProps, user: contactProps };
