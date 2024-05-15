import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import Comment from "./Comment";
import { DataContext } from "../App";

export default function ClickedPost() {
  const { contacts } = useContext(DataContext);
  const [comments, setComments] = useState();
  const [contact, setContact] = useState();
  const [post, setPost] = useState();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/Hamada-AB/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setPost(data);
        }
      })
      .catch((error) => console.error(error));

    fetch(`https://boolean-api-server.fly.dev/Hamada-AB/post/${id}/comment`)
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
  }, [contacts, post, id]);

  return (
    <>
      <section>
        <article className="post">
          <div className="post-info">
            <Avatar>{contact}</Avatar>
            <div className="user-data">
              <h3 className="user-name">
                {`${contact?.firstName} ${contact?.lastName}`}
              </h3>
              <p className="post-title">{post?.title}</p>
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
      </section>
    </>
  );
}
