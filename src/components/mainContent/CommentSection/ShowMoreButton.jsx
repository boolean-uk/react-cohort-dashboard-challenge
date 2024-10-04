import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  background: none;
  border: none;
  color: #6d6d93;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 1rem;

  &:hover {
    text-decoration: none;
  }
`;

const ShowMoreButton = ({ showAll, setShowAll }) => (
  <Button onClick={() => setShowAll(!showAll)}>
    {showAll ? "Show less" : "Show all"} comments
  </Button>
);

ShowMoreButton.propTypes = {
  showAll: PropTypes.bool.isRequired,
  setShowAll: PropTypes.func.isRequired,
};

export default ShowMoreButton;
