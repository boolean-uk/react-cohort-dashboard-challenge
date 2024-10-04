import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Circle = styled(Link)`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "40px"};
  min-width: 40px;
  border-radius: 50%;
  background-color: #64dc78;
  color: #000046;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.width ? "1.5rem" : "1rem")};
  font-weight: bold;
`;

const getInitials = (firstName, lastName) => {
  if (!firstName || !lastName) return "";
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

const ProfileCircle = ({ id, firstName, lastName, width, height }) => {
  const initials = getInitials(firstName, lastName);
  return (
    <Circle to={`/profile/${id}`} width={width} height={height}>
      {initials}
    </Circle>
  );
};

ProfileCircle.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ProfileCircle;
