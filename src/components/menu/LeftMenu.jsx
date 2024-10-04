import styled from "styled-components";
import homeIcon from "../../assets/home-icon-svg.svg";
import profileIcon from "../../assets/profile-icon-svg.svg";
import { Link } from "react-router-dom";
import { CohortAppContext } from "../../context";
import { useContext } from "react";

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled(Link)`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #e6ebf5;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.span`
  color: #6d6d93;
  display: block;
  text-align: center;
`;

const LeftMenu = () => {
  const { userProfile } = useContext(CohortAppContext);
  return (
    <MenuContainer>
      <MenuItem to={"/"}>
        <Icon src={homeIcon} alt="Home Icon" />
        <Text>Home</Text>
      </MenuItem>
      <MenuItem to={`/profile/${userProfile.id}`}>
        <Icon src={profileIcon} alt="Profile Icon" />
        <Text>Profile</Text>
      </MenuItem>
    </MenuContainer>
  );
};

export default LeftMenu;
