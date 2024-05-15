import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import Avatar from "./Avatar";
import Comment from "./Comment";
import { DataContext } from "../App";

export default function Post(props) {
  const { contacts, posts, user } = useContext(DataContext);

  const [comments, setComments] = useState();
  const [contact, setContact] = useState();

  const { post } = props;

  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/Hamada-AB/post/${post?.id}/comment`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setComments(data);
        }
      })
      .catch((error) => console.error(error));

    contacts?.find((contact) => {
      if (post?.contactId == contact?.id) {
        setContact(contact);
      }
    });
  }, [contacts, post, posts]);

  return (
    <>
      <section>
        <article className="post">
          <div className="post-info">
            <Link to={`/profile/${contact?.id}`}>
              <Avatar>{contact}</Avatar>
            </Link>
            <div className="user-data">
              <h3 className="user-name">
                <Link
                  to={`/profile/${contact?.id}`}
                >{`${contact?.firstName} ${contact?.lastName}`}</Link>
              </h3>
              <p className="post-title">
                <Link to={`/post/${post?.id}`}>{post?.title}</Link>
              </p>
            </div>
          </div>
          <p className="post-content">{post?.content}</p>
        </article>

        <article className="comments">
          {comments &&
            comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  contacts={contacts}
                />
              );
            })}
        </article>

        <article className="">
          <AddComment
            postId={post?.id}
            comments={comments}
            setComments={setComments}
          />
        </article>
      </section>
    </>
  );
}
