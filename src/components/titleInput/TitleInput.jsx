const TitleInput = ({ handleTitleInput, }) => {
  return (
    <input
      className="title"
      placeholder="whats on your mind?"
      onChange={handleTitleInput}
    ></input>
  );
};

export default TitleInput;
