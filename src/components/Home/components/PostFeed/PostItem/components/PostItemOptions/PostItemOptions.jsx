import api from "@utilities/api";
import { boolProps, funcProp, numberProp } from "@utilities/propTypeDefs";

export default function PostItemOptions({
  itemHover,
  postId,
  showItemMenu,
  setLoadPosts,
  setShowItemMenu,
}) {
  function handleOptionClick() {
    setShowItemMenu(!showItemMenu);
  }

  function handleDeleteClick() {
    api.post.delete(postId);
    setLoadPosts(true);
  }

  return (
    <>
      {showItemMenu && (
        <ul className="absolute right-4 top-4 flex flex-col gap-1 rounded-3xl bg-cohort-shade py-4 pr-12">
          <li className="cursor-pointer rounded-r-xl p-2 hover:bg-cohort-bg-highlight">
            Edit
          </li>
          <li
            onClick={handleDeleteClick}
            className="cursor-pointer rounded-r-xl p-2 text-red-400 hover:bg-cohort-bg-highlight"
          >
            Delete
          </li>
        </ul>
      )}
      {(itemHover || showItemMenu) && (
        <div
          onClick={handleOptionClick}
          className={`post-item-more-options absolute right-4 top-4 flex cursor-pointer justify-center rounded-full p-4 ${
            showItemMenu
              ? "hover:bg-cohort-bg-highlight"
              : "hover:bg-cohort-shade"
          }`}
        >
          <img
            className="w-4"
            src="https://img.icons8.com/ios-glyphs/ellipsis.png"
            alt="ellipsis"
          />
        </div>
      )}
    </>
  );
}

PostItemOptions.propTypes = {
  itemHover: boolProps,
  postId: numberProp,
  showItemMenu: boolProps,
  setLoadPosts: funcProp,
  setShowItemMenu: funcProp,
};
