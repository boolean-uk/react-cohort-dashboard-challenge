import { useEffect, useState } from "react";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";
import { getComments } from "../../../Helpers/APIManager";
import PropTypes from "prop-types";
import { Button, Center, Space, Loader } from "@mantine/core";

export function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Fetching comments for post", postId);
    setLoading(true);
    getComments(postId)
      .then((data) => {
        setComments(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postId]);

  const [visibleComments, setVisibleComments] = useState(3);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  useEffect(() => {
    setShowLoadMoreButton(comments.length > visibleComments);
  }, [comments, visibleComments]);

  const loadMoreComments = () => {
    const remainingComments = comments.length - visibleComments;
    const nextVisibleComments = visibleComments + 5;
    setVisibleComments(nextVisibleComments);
    setShowLoadMoreButton(remainingComments > 5);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        comments
          .slice(0, visibleComments)
          .map((comment) => <Comment key={comment.id} comment={comment} />)
      )}
      {showLoadMoreButton && (
        <>
          <Center position="center">
            <Button variant="default" onClick={loadMoreComments}>
              Load More Comments
            </Button>
          </Center>
          <Space h={10} />
        </>
      )}
      <AddComment
        postId={postId}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
}

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};
