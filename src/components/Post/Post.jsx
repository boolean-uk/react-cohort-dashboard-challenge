import "@styles/Post.css";
import ProfileCircle from "../ProfileCircle";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { deletePost } from "@services/PostService";
import { useNavigate } from "react-router-dom";
import PostCommentList from "./PostCommentList";
import { getContact } from "@services/PostService";

export default function Post({ children, title, id, onDelete, contactId }) {
  const [contact, setContact] = useState({});
  const { mutateAsync } = useMutation(["deletePost", id], () => deletePost(id));
  const { isLoading, isSuccess, data } = useQuery(
    ["getContact", contactId],
    () => getContact(contactId)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setContact(data);
    }
  }, [isSuccess, data]);

  const removePost = async () => {
    const response = await mutateAsync(id);
    if (response) onDelete(id);
  };

  const contactFullname = `${contact.firstName} ${contact.lastName}`;

  return (
    <div className="card">
      <span
        onClick={removePost}
        className="material-symbols-outlined delete-btn"
      >
        delete
      </span>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="user-info">
          <ProfileCircle
            contactId={contact.id}
            color={contact.favouriteColour}
            fullname={contactFullname}
          />
          <div className="user-info-text">
            <h3 style={{ padding: 0, margin: 0 }}>{contactFullname}</h3>
            <p
              className="title"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/post/${id}`)}
            >
              {title}
            </p>
          </div>
        </div>
      )}
      <p className="card-content">{children}</p>
      <PostCommentList postId={id} />
    </div>
  );
}
