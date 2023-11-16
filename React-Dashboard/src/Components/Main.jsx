import PostInput from "./MainComponents/PostInput";
import FirstContact from "./HeaderComponents/FirstContact";
import PostComment from "./MainComponents/showContent";
import { useState, useEffect } from "react";
function Main(props) {
  const commentData = {
    contactId: 1,
  };
  const [anotherComment, setAnotherComment] = useState(commentData);
  const [rerenderPost, setRerenderPost] = useState(false);
  const [comments, setComments] = useState([]);

  //console.log("this is renderPost in Main.jsx:", rerenderpost);

  const {
    contactIdOne,
    setContactIdOne,
    allContact,
    setAllContact,
    contents,
    setContents,
  } = props;

  return (
    <main>
      <section className="post">
        <FirstContact
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
        />
        <PostInput
          contents={contents}
          setContents={setContents}
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
          rerenderPost={rerenderPost}
          setRerenderPost={setRerenderPost}
        />
      </section>
      <section className="displayed-post">
        <PostComment
          comments={comments}
          setComments={setComments}
          rerenderPost={rerenderPost}
          setRerenderPost={setRerenderPost}
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
          contents={contents}
          setContents={setContents}
          allContact={allContact}
          setAllContact={setAllContact}
        />
      </section>
    </main>
  );
}
export default Main;
