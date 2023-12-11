import UserProfilePic from "./Userpicture";
import ComposePost from "./components/Composepost";
import CommentForm from "./components/Commentsform";
import { useState } from "react";

const Home = ({ showNames, showComments }) => {
  if (!Array.isArray(showNames) || !Array.isArray(showComments)) {
    return <p></p>;
  }

  const minLength = Math.min(showNames.length, showComments.length);
  const [enteredComments, setEnteredComments] = useState(
    Array(minLength).fill("")
  );

  const handleCommentSubmit = (index, comment) => {
    console.log(`Submitted Comment ${index}:`, comment);

    setEnteredComments((prevComments) =>
      prevComments.map((prevComment, i) =>
        i === index ? comment : prevComment
      )
    );
  };

  return (
    <div>
      <ComposePost></ComposePost>

      {Array.from({ length: minLength }, (_, index) => (
        <div key={index}>
          {index < showNames.length && (
            <>
              <div className="FriendsInitials">
                <p>
                  {`${showNames[index].firstName.charAt(0)}`}
                  {`${showNames[index].lastName.charAt(0)}`}
                </p>
              </div>
              <p>{`${showNames[index].firstName}`}</p>
              <p>{`${showNames[index].lastName}`}</p>
            </>
          )}

          {index < showComments.length && (
            <>
              <p>{`${showComments[index].title}`}</p>
              <p>{`${showComments[index].content}`}</p>
              <UserProfilePic></UserProfilePic>
              <CommentForm
                comment={enteredComments[index] || ""} // Pass a defined value or an empty string
                onSubmitComment={(comment) =>
                  handleCommentSubmit(index, comment)
                }
              />
              <p>{enteredComments[index]}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
