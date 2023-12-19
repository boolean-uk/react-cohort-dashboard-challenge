/* eslint-disable react/prop-types */
export default function Composecommentbutton({ getComment }) {
  return (
    <button className="commentbutton" onClick={getComment}>
      COMMENT
    </button>
  );
}
