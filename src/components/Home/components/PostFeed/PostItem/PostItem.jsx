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
import {
  editPostFormSetup,
  editPostInitialForm,
} from "@utilities/formTemplates";
import EditItemForm from "@components/ItemOptions/EditItemForm";

export default function PostItem({ postProp, setLoadPosts, user }) {
  const [post, setPost] = useState(null);

  const [loadPost, setLoadPost] = useState(false);
  const [loadComments, setLoadComments] = useState(true);

  const [itemHover, setItemHover] = useState(false);
  const [showItemMenu, setShowItemMenu] = useState(false);

  const [editableItem, setEditableItem] = useState(false);

  const [formData, setFormData] = useState(editPostInitialForm);
  const [submitted, setSubmitted] = useState(null);

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

  useEffect(() => {
    if (!formData.id) {
      setFormData({ ...formData, ...post });
    }
  }, [formData, post]);

  function handleHoverEnter() {
    setItemHover(true);
  }

  function handleHoverLeave() {
    setItemHover(false);
  }

  function putRequest(payload) {
    return api.post.put(payload.id, payload); // TODO: doesn't work in single post view oops
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
      {editableItem ? (
        <EditItemForm
          formSetup={editPostFormSetup}
          formData={formData}
          putRequest={putRequest}
          setEditableItem={setEditableItem}
          setFormData={setFormData}
          setLoadItem={setLoadPosts}
          setShowItemMenu={setShowItemMenu}
          setSubmitted={setSubmitted}
          submitted={submitted}
        />
      ) : (
        <>
          <PostHeader post={post} editableItem={editableItem} />
          <PostBody content={post.content} />{" "}
        </>
      )}

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
