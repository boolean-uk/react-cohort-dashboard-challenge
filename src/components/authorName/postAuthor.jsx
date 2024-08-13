
const Author = ({currentUser}) => {
  return <p id="title">{currentUser?.firstName+ ' ' + currentUser?.lastName}</p>;
};

export default Author
