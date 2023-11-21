import UserProfilePic from "./Userpicture";
import ComposePost from "./components/Composepost";

const Home = ({ showNames, showComments }) => {
  // Check if showNames and showComments are arrays before mapping
  if (!Array.isArray(showNames) || !Array.isArray(showComments)) {
    return <p></p>;
  }

  // Determine the minimum length of the two arrays
  const minLength = Math.min(showNames.length, showComments.length);

  return (
    <div>
      <ComposePost></ComposePost>

      {/* Iterate up to the minimum length of the two arrays */}
      {Array.from({ length: minLength }, (_, index) => (
        <div key={index}>
          {/* Display first name and last name */}
          {index < showNames.length && (
            <>
              <div className="FriendsInitials">
                <p>{`${showNames[index].firstName.charAt(0)}`}{`${showNames[index].lastName.charAt(0)}`}</p>
                
              </div>
              <p>{`${showNames[index].firstName}`}</p>
              <p>{`${showNames[index].lastName}`}</p>
            </>
          )}

          {/* Display title and content */}
          {index < showComments.length && (
            <>
              <p>{`${showComments[index].title}`}</p>
              <p>{`${showComments[index].content}`}</p>
              <UserProfilePic></UserProfilePic>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
