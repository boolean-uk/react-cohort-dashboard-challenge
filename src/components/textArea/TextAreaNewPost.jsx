export const TextAreaNewPost = ({ handleContentInput }) => {
  return (
    <textarea
      className="caption"
      placeholder="write the caption ..."
      onChange={handleContentInput}
    />
  );
};
