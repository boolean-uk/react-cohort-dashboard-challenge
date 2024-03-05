import { useEffect, useState } from "react";
import { Comment } from "./Comment";
import { getComments } from "../../../Helpers/APIManager";
import PropTypes from "prop-types";
import { Button, Center, Space } from "@mantine/core";

export function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then((data) => {
      setComments(data);
    });
  }, []);

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
      {comments.slice(0, visibleComments).map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
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
    </>
  );
}

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};
