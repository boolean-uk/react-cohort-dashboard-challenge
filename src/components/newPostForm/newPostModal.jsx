import { CloseButton } from "../buttons/CloseButton";
import InitialsButton from "../buttons/initialsButton";
import PostButton from "../buttons/postButton";
import { TextAreaNewPost } from "../textArea/TextAreaNewPost";
import TitleInput from "../titleInput/TitleInput";

export const NewPostModal = ({
  handleContentInput,
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleButton,
  currentUser,
}) => {
  return (
    <>
      {isFormVisible && (
        <form className="modal" onSubmit={newPostHandleButton}>
          <div>
            <InitialsButton currentUser={currentUser} />
            <TitleInput handleTitleInput={handleTitleInput} />
          </div>
          <TextAreaNewPost handleContentInput={handleContentInput} />
          <div className="form-buttons">
            <CloseButton toggleFormVisibility={toggleFormVisibility} />
            <PostButton />
          </div>
        </form>
      )}
    </>
  );
};
