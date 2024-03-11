import { DataContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileAvatar from "../../ProfileAvatar";

export default function PostHeader({
  post,
  editing,
  setEditing,
  editedPost,
  setEditedPost,
}) {
  const setPosts = useContext(DataContext).setPosts;
  const posts = useContext(DataContext).posts;

  const deletePost = () => {
    fetch("https://boolean-api-server.fly.dev/pkekkonen/post/" + post.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setPosts(posts.filter((p) => p.id !== responseData.id));
      });
      setEditedPost(null)
  };

  const edit = () => {
    setEditing(true);
    setEditedPost(post);
  };

  const save = () => {
    setEditing(false);
    fetch(
      "https://boolean-api-server.fly.dev/pkekkonen/post/" + editedPost.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPost),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setPosts(posts.map((p) => (p.id === responseData.id ? editedPost : p)));
      });
  };

  return (
    <>
      {post.user && (
        <div className="post">
          <ProfileAvatar
            user={post.user}
            className="circle header-top post-circle"
          />
          <div className="post-title-and-user">
            <p className="header-name header-top post-user">
              {post.user.firstName + " " + post.user.lastName}
            </p>
            {!editing && (
              <Link className="post-title" to={"/view/" + post.id}>
                {post.title}
              </Link>
            )}
            {editing && (
              <input
                type="text"
                id="post"
                name="post"
                onChange={(event) =>
                  setEditedPost({
                    ...editedPost,
                    title: event.target.value,
                  })
                }
                value={editedPost.title}
              />
            )}
          </div>
          {editing && (
            <div>
              <button onClick={save}>Save</button>
            </div>
          )}
          {!editing && (
            <div>
              <button className="edit" onClick={edit}>
                Edit
              </button>
              <button className="delete"  onClick={deletePost}>
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
