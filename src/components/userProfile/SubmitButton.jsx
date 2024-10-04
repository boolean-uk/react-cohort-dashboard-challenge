import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  background-color: #000046;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #333;
  }
`;

const SubmitButton = ({ type, children }) => (
  <Button type={type}>{children}</Button>
);

SubmitButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default SubmitButton;
