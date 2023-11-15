import ItemMenu from "@components/ItemMenu";
import api from "@utilities/api";
import { boolProps, funcProp, numberProp } from "@utilities/propTypeDefs";

export default function PostItemOptions({
  editablePost,
  itemHover,
  postId,
  showItemMenu,
  setEditablePost,
  setLoadPosts,
  setShowItemMenu,
}) {
  function handleOptionClick() {
    setShowItemMenu(!showItemMenu);
  }

  function handleEditClick() {
    setEditablePost(!editablePost);
  }

  function handleDeleteClick() {
    //TODO: if on single page, need to redirect back to home page
    api.post.delete(postId).then(() => setLoadPosts(true));
  }

  return (
    <ItemMenu
      handleDeleteClick={handleDeleteClick}
      handleEditClick={handleEditClick}
      handleOptionClick={handleOptionClick}
      itemHover={itemHover}
      showItemMenu={showItemMenu}
    />
  );
}

PostItemOptions.propTypes = {
  editablePost: boolProps,
  itemHover: boolProps,
  postId: numberProp,
  showItemMenu: boolProps,
  setEditablePost: funcProp,
  setLoadPosts: funcProp,
  setShowItemMenu: funcProp,
};
