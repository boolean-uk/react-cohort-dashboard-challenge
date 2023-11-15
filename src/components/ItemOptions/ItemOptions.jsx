import { boolProps, funcProp, numberProp } from "@utilities/propTypeDefs";

export default function ItemOptions({
  editableItem,
  handleDeleteClick,
  itemHover,
  itemId,
  showItemMenu,
  setEditableItem,
  setLoadItems,
  setShowItemMenu,
}) {
  function handleOptionClick() {
    setShowItemMenu(!showItemMenu);
  }

  function handleEditClick() {
    setEditableItem(!editableItem);
  }

  return (
    <>
      {showItemMenu && (
        <ul className="absolute right-4 top-4 flex flex-col gap-1 rounded-3xl border border-cohort-green bg-cohort-shade py-4 pr-12">
          <li
            onClick={handleEditClick}
            className="cursor-pointer rounded-r-xl p-2 hover:bg-cohort-bg-highlight"
          >
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
          className={`post-item-more-options absolute right-4 top-4 flex cursor-pointer justify-center rounded-full p-4 hover:bg-cohort-green ${
            showItemMenu && "rounded-none rounded-bl-3xl rounded-tr-3xl"
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

ItemOptions.propTypes = {
  editablePost: boolProps,
  itemHover: boolProps,
  itemId: numberProp,
  showItemMenu: boolProps,
  setEditableItem: funcProp,
  setLoadItems: funcProp,
  setShowItemMenu: funcProp,
};
