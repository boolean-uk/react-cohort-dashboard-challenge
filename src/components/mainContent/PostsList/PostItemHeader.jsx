import styled from "styled-components";
import PropTypes from "prop-types";
import ProfileCircle from "../../ProfileCircle";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  color: #000046;
  align-items: center;
  text-decoration: none;
  margin-left: 15px;
  cursor: pointer;
`;

const NameTitleWrapper = styled.div`
  flex: 1;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const UserNameWrapper = styled(Link)`
  color: #000046;
  text-decoration: none;
`;

const TitleWrapper = styled(Link)`
  font-size: 1rem;
  color: #67678e;
  margin: 0;
`;

const PostItemHeader = ({ author, title, postId }) => {
  return (
    <Header>
      <ProfileCircle
        id={author.id}
        firstName={author.firstName}
        lastName={author.lastName}
      />
      <NameTitleWrapper>
        <UserNameWrapper to={`/profile/${author.id}`}>
          {author.firstName} {author.lastName}
        </UserNameWrapper>
        <TitleWrapper to={`/post/${postId}`}>{title}</TitleWrapper>
      </NameTitleWrapper>
    </Header>
  );
};

PostItemHeader.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
};

export default PostItemHeader;
