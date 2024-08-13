import PostButton from "../buttons/postButton";
import InitialsButton from "../buttons/initialsButton";
import { NewPostModal } from "./newPostModal";
import TitleInput from "../titleInput/TitleInput";

const NewPostForm = ({
  handleContentInput,
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleButton,
  currentUser,
}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <InitialsButton currentUser={currentUser} />
        <div onClick={toggleFormVisibility}>
          <TitleInput handleTitleInput={handleTitleInput} />
          <PostButton newPostHandleButton={newPostHandleButton} />
        </div>
      </form>
      <NewPostModal
        handleContentInput={handleContentInput}
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
        newPostHandleButton={newPostHandleButton}
        currentUser={currentUser}
      />
    </>
  );
};

export default NewPostForm;
