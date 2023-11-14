import "./addComment.css";
const AddComment = ({ loggedInUser }) => {
  const handleSubmit = () => {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/post/${postId}/comment
`);
  };
  return (
    <div className='addComment'>
      <div className='addCommentInitials'>
        <p>
          {loggedInUser.firstName && loggedInUser.lastName && (
            <p>
              {loggedInUser.firstName[0]}
              {loggedInUser.lastName[0]}
            </p>
          )}
        </p>
      </div>
      <div className='submitComment'>
        <input type='text' placeholder='Add a comment...' />
        <img
          onClick={handleSubmit}
          className='sendCommentButton'
          src='https://www.svgrepo.com/show/533310/send-alt-1.svg'
          alt=''
        />
      </div>
    </div>
  );
};

export default AddComment;
