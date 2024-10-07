import { useContext } from "react";
import { PostContext, ContactContext } from "../../App";
import CommentPostComponent from "./CommentPostComponent";

export default function PostComponent() {
  const { posts } = useContext(PostContext);
  const { contacts } = useContext(ContactContext);

  const getAuthorDetails = (contactId) => {
    return contacts.find((contact) => contact.id === contactId);
  };

  return (
    <div>
      {posts.map((post) => {
        const author = getAuthorDetails(post.contactId);
        return (
          <div key={post.id} className="post">
            <div className="post-header">
              {author && (
                <div
                  className="author-initials"
                  style={{
                    backgroundColor: author.favouriteColour || "#ccc",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  {`${author.firstName[0]}${author.lastName[0]}`}
                </div>
              )}
              {author && (
                <p>
                  {author.firstName} {author.lastName}
                </p>
              )}
              <h2>{post.title}</h2>
            </div>
            <p>{post.content}</p>
            <CommentPostComponent
              postId={post.id}
            />
          </div>
        );
      })}
    </div>
  );
}
