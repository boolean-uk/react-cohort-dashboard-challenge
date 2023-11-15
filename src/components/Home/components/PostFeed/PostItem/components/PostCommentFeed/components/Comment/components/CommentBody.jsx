import CommentContent from "./CommentContent";

import ItemOptions from "@components/ItemOptions/ItemOptions";
import PulseLoader from "@components/Loader/PulseLoader";
import UserName from "@components/UserName";

import {
  boolProps,
  commentProps,
  contactProps,
  funcProp,
} from "@utilities/propTypeDefs";

export default function CommentBody({
  contact,
  comment,
  handleHoverEnter,
  handleHoverLeave,
  handleDeleteClick,
  editableItem,
  itemHover,
  showItemMenu,
  setEditableItem,
  setLoadComments,
  setShowItemMenu,
}) {
  if (!contact) {
    return <PulseLoader />;
  }

  const { content } = comment;

  return (
    <div
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      className="post-comment-body relative rounded-lg bg-cohort-shade p-3 pr-16"
    >
      <UserName contact={contact} />
      <CommentContent content={content} />
      <ItemOptions
        editableItem={editableItem}
        handleDeleteClick={handleDeleteClick}
        itemHover={itemHover}
        itemId={comment.id}
        showItemMenu={showItemMenu}
        setEditableItem={setEditableItem}
        setLoadItems={setLoadComments}
        setShowItemMenu={setShowItemMenu}
      />
    </div>
  );
}

CommentBody.propTypes = {
  contact: contactProps,
  comment: commentProps,
  handleHoverEnter: funcProp,
  handleHoverLeave: funcProp,
  handleDeleteClick: funcProp,
  editableItem: boolProps,
  itemHover: boolProps,
  showItemMenu: boolProps,
  setEditableItem: funcProp,
  setLoadComments: funcProp,
  setShowItemMenu: funcProp,
};
