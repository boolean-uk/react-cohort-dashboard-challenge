import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CohortAppContext } from "../../../context";
import PostItemHeader from "./PostItemHeader";
import CommentSection from "../CommentSection/CommentSection";

const Card = styled.div`
  background-color: #fff;
  color: #161656;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
`;

const TextContent = styled.p`
  margin-top: 15px;
  margin-left: 15px;
  font-weight: 600;
  color: #47477a;
`;

const PostItem = ({ post, showAllComments }) => {
  const { contacts } = useContext(CohortAppContext);
  const author = contacts.find((contact) => contact.id === post.contactId);

  return (
    <Card>
      <PostItemHeader postId={post.id} author={author} title={post.title} />
      <TextContent>{post.content}</TextContent>
      <CommentSection showAllComments={showAllComments} post={post} />
    </Card>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  showAllComments: PropTypes.bool,
};

export default PostItem;
