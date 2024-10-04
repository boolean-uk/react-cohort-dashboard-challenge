import styled from "styled-components";
import ProfileCircle from "../ProfileCircle";
import { useContext } from "react";
import { ProfileContext } from "./UserProfile";

const NameHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: #000046;
  margin-bottom: 20px;
  text-align: center;
  margin-left: 20px;
`;

const NameText = styled.span`
  margin-left: 10px;
`;

const ProfileHeader = () => {
  const { user } = useContext(ProfileContext);

  return (
    <NameHeader>
      <ProfileCircle
        width="60px"
        height="60px"
        firstName={user.firstName}
        lastName={user.lastName}
      />
      <NameText>
        {user.firstName} {user.lastName}
      </NameText>
    </NameHeader>
  );
};

export default ProfileHeader;
