import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NewComment from "./components/NewComment/NewComment";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed/PostCommentFeed";
import PostHeader from "./components/PostHeader/PostHeader";

import ItemOptions from "@components/ItemOptions/ItemOptions";
import PulseLoader from "@components/Loader/PulseLoader";

import api from "@utilities/api";
import { contactProps, funcProp, postProps } from "@utilities/propTypeDefs";

export default function PostItem({ postProp, setLoadPosts, user }) {
  const [post, setPost] = useState(null);

  const [loadPost, setLoadPost] = useState(false);
  const [loadComments, setLoadComments] = useState(true);

  const [itemHover, setItemHover] = useState(false);
  const [showItemMenu, setShowItemMenu] = useState(false);

  const [editableItem, setEditableItem] = useState(false)

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

  function handleHoverEnter() {
    setItemHover(true);
  }

  function handleHoverLeave() {
    setItemHover(false);
  }

  function handleDeleteClick() {
    //TODO: if on single page, need to redirect back to home page
    api.post.delete(post.id).then(() => setLoadPosts(true));
  }

  if (!post) {
    return <PulseLoader />;
  }

  return (
    <li
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      className="post-item app-card relative flex flex-col gap-4"
    >
      <PostHeader post={post} editableItem={editableItem}/>
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
      <ItemOptions
        editableItem={editableItem}
        handleDeleteClick={handleDeleteClick}
        itemHover={itemHover}
        itemId={post.id}
        showItemMenu={showItemMenu}
        setEditableItem={setEditableItem}
        setLoadItems={setLoadPosts}
        setShowItemMenu={setShowItemMenu}
      />
    </li>
  );
}

PostItem.propTypes = {
  postProp: postProps,
  setLoadPosts: funcProp,
  user: contactProps,
};
