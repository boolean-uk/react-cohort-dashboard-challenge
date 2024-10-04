import styled from "styled-components";
import titleHeader from "../../assets/title-header-svg.svg";
import ProfileCircle from "../ProfileCircle";
import { CohortAppContext } from "../../context";
import { useContext } from "react";

const StyledHeader = styled.header`
  background-color: #000046;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;

const Icon = styled.img`
  height: 30px;
  margin-left: 20px;
`;

const ProfileCircleWrapper = styled.div`
  margin-right: 20px;
`;

const Header = () => {
  const { userProfile } = useContext(CohortAppContext);

  return (
    <StyledHeader>
      <Icon src={titleHeader} alt="Title Icon" />
      <ProfileCircleWrapper>
        <ProfileCircle
          id={userProfile.id}
          firstName={userProfile.firstName}
          lastName={userProfile.lastName}
        />
      </ProfileCircleWrapper>
    </StyledHeader>
  );
};

export default Header;
