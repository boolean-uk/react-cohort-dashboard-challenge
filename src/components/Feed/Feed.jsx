import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Feed() {
  const [postData, setPostData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newCommentContent, setNewCommentContent] = useState("");
  const commentIdSet = new Set();

  useEffect(() => {
    async function fetchData() {
      const fetchFromApi = async (url) => {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Network response was not ok for ${url}`);
        return response.json();
      };

      try {
        const [posts, contacts] = await Promise.all([
          fetchFromApi(`https://boolean-api-server.fly.dev/irlydo/post/`),
          fetchFromApi("https://boolean-api-server.fly.dev/irlydo/contact"),
        ]);
        setPostData(posts.reverse());
        setContactData(contacts);
        setCommentData([]); // Reset comments
        commentIdSet.clear();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Fetch comments for posts
  useEffect(() => {
    const fetchCommentsForPosts = async () => {
      const commentsPromises = postData.map((post) =>
        fetch(
          `https://boolean-api-server.fly.dev/irlydo/post/${post.id}/comment`
        )
          .then((response) => response.json())
          .then((data) =>
            data.filter((comment) => !commentIdSet.has(comment.id))
          )
      );

      try {
        const commentsArrays = await Promise.all(commentsPromises);
        const uniqueComments = commentsArrays.flat().filter((comment) => {
          if (commentIdSet.has(comment.id)) return false;
          commentIdSet.add(comment.id);
          return true;
        });
        setCommentData(uniqueComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (postData.length) fetchCommentsForPosts();
  }, [postData]);

  const handlePostSubmit = async () => {
    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/irlydo/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "New post",
            content: newPostContent,
            contactId: 1,
          }),
        }
      );

      console.log("POST Request Response:", response);
      const newPost = await response.json();

      setPostData((prevData) => [newPost, ...prevData]);

      setNewPostContent("");
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    try {
      if (!postId) {
        console.error("postId is required for submitting a comment");
        return;
      }

      const response = await fetch(
        `https://boolean-api-server.fly.dev/irlydo/post/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newCommentContent,
            contactId: 1,
            postId: postId,
          }),
        }
      );

      const newComment = await response.json();

      setCommentData((prevData) => [...prevData, newComment]);

      setNewCommentContent("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <ul className="feed-ul">
      <input
        type="text"
        placeholder="What's on your mind?"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      ></input>
      <button
        type="button"
        className="submit-button"
        onClick={handlePostSubmit}
      >
        <i className="fa-solid fa-paper-plane"></i>
      </button>
      {postData.map((post) => {
        const contact = contactData.find(
          (contact) => contact.id === post.contactId
        );
        if (!contact) {
          console.error(`Contact not found for post with id ${post.id}`);
          return null;
        }

        let initials = `${contact.firstName[0]}${contact.lastName[0]}`;

        const filteredComments = commentData
          .filter((comment) => comment.postId === post.id)
          .filter((comment) => !commentIdSet.has(comment.id));

        return (
          <li key={post.id} className="post">
            <div className="post-header">
              <p className="initials">{initials}</p>
              <div className="author-and-title">
                <h3 className="full-name">
                  {contact.firstName} {contact.lastName}
                </h3>
                <Link to={`/post/${post.id}`}>
                  <h5>{post.title}</h5>
                </Link>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <hr></hr>
            <ul>
              {filteredComments.map((comment, index) => {
                const commenterContact = contactData.find(
                  (contact) => contact.id === comment.contactId
                );

                let commenterInitials = `${commenterContact.firstName[0]}${commenterContact.lastName[0]}`;

                const uniqueKey = `${post.id}-${index}`;
                return (
                  <li className="comment-section" key={uniqueKey}>
                    <p className="commenter-initials">{commenterInitials}</p>
                    <div className="comment-name-and-content">
                      <p className="commenter-name">
                        {commenterContact.firstName} {commenterContact.lastName}
                      </p>
                      <p>{comment.content}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <hr></hr>
            <input
              type="text"
              placeholder="Add comment"
              value={newCommentContent}
              onChange={(e) => setNewCommentContent(e.target.value)}
            ></input>
            <button
              type="button"
              className="submit-button"
              onClick={() => handleCommentSubmit(post.id)}
            >
              <i className="fa-solid fa-comment-dots"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
