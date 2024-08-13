import NewPostForm from "../newPostForm/newPostForm.jsx";
import PostsList from "../postsList/postsList.jsx";

const MainContent = ({
  handleContentInput,
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleButton,
  currentUser,
  posts,
  contacts,
  comments,
  commentInputHandler,
  newCommentButton,
  openPostHandler,
}) => {
  return (
    <div className="main-content">
      <NewPostForm
        handleContentInput={handleContentInput}
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
        newPostHandleButton={newPostHandleButton}
        currentUser={currentUser}
      />
      <PostsList
        posts={posts}
        contacts={contacts}
        comments={comments}
        commentInputHandler={commentInputHandler}
        newCommentButton={newCommentButton}
        currentUser={currentUser}
        openPostHandler={openPostHandler}
      />
    </div>
  );
};

export default MainContent;
