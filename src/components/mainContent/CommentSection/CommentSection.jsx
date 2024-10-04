import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CohortAppContext } from "../../../context";
import { update } from "../../../api/api";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentSection = ({ post, showAllComments = true }) => {
  const [showAll, setShowAll] = useState(showAllComments);
  const { posts, setPosts } = useContext(CohortAppContext);

  const onAddComment = async (comment) => {
    const updatedPost = {
      ...post,
      comments: [...(post.comments || []), comment],
    };

    const updatedPostFromApi = await update("post", post.id, updatedPost);

    const updatedPosts = posts.map((p) =>
      p.id === post.id ? updatedPostFromApi : p
    );

    setPosts(updatedPosts);
  };

  return (
    <div>
      <CommentList
        comments={post.comments || []}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <CommentForm post={post} onAddComment={onAddComment} />
    </div>
  );
};

CommentSection.propTypes = {
  post: PropTypes.object.isRequired,
  showAllComments: PropTypes.bool,
};

export default CommentSection;
