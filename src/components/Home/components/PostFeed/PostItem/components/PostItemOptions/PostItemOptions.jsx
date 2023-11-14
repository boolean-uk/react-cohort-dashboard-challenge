import { boolProps, funcProp } from "@utilities/propTypeDefs";

export default function PostItemOptions({
  itemHover,
  showItemMenu,
  setShowItemMenu,
}) {
  function handleOptionClick() {
    setShowItemMenu(!showItemMenu);
  }
  return (
    <>
      {showItemMenu && (
        <ul className="absolute right-4 top-4 flex flex-col gap-4 rounded-3xl bg-cohort-shade p-4 pr-12">
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      )}
      {(itemHover || showItemMenu) && (
        <div
          onClick={handleOptionClick}
          className="post-item-more-options absolute right-4 top-4 flex cursor-pointer justify-center rounded-full p-4 hover:bg-cohort-shade"
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
  showItemMenu: boolProps,
  setShowItemMenu: funcProp,
};
