import PostInput from "./MainComponents/PostInput";
import FirstContact from "./HeaderComponents/FirstContact";
import PostComment from "./MainComponents/showContent";
import { useState, useEffect, useContext } from "react";
import { UserContents } from "../App";
function Main(props) {
  const commentData = {
    contactId: 1,
  };
  const [anotherComment, setAnotherComment] = useState(commentData);
  const [comments, setComments] = useState([]);
  const { contents, setContents } = useContext(UserContents);
  //console.log("this is renderPost  in Main.jsx:", rerenderpost);

  const { contactIdOne, setContactIdOne, allContact, setAllContact } = props;

  return (
    <main>
      <section className="post">
        <FirstContact
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
        />
        <PostInput
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
        />
      </section>
      <section className="displayed-post">
        <PostComment
          comments={comments}
          setComments={setComments}
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
          allContact={allContact}
          setAllContact={setAllContact}
        />
      </section>
    </main>
  );
}
export default Main;
