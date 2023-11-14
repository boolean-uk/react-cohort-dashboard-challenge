export default function GenerateCommentButton({ generateComment }) {
  return (
    <button className="comment__button" onClick={generateComment}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 100 100"
      >
        <polygon points="90,50 30,90 30,10" fill="black" />
      </svg>
    </button>
  );
}
