import PostInput from "./MainComponents/PostInput";
import FirstContact from "./HeaderComponents/FirstContact";
import PostComment from "./MainComponents/showComment";
function Main(props) {
  const {
    contactIdOne,
    setContactIdOne,
    comment,
    setComment,
    allContact,
    setAllContact,
  } = props;

  return (
    <main>
      <section className="post">
        <FirstContact
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
        />
        <PostInput />
      </section>
      <section className="displayed-post">
        <PostComment
          comment={comment}
          setComment={setComment}
          allContact={allContact}
          setAllContact={setAllContact}
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
        />
      </section>
    </main>
  );
}
export default Main;
