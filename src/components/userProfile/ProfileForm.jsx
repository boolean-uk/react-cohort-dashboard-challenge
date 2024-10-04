import styled from "styled-components";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import { useContext } from "react";
import { ProfileContext } from "./UserProfile";

const Columns = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const Column = styled.div`
  flex: 1;
  margin: 0 30px;
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  color: #000046;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

const ProfileForm = () => {
  const { newContact, handleChange, handleSubmit } = useContext(ProfileContext);

  return (
    <form onSubmit={handleSubmit}>
      <Columns>
        <Column>
          <SectionHeader>Account Info</SectionHeader>
          <FormField
            label="First Name*"
            type="text"
            name="firstName"
            value={newContact.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Last Name*"
            type="text"
            name="lastName"
            value={newContact.lastName}
            onChange={handleChange}
          />
          <FormField
            label="Email*"
            type="text"
            name="email"
            value={newContact.email}
            onChange={handleChange}
          />
        </Column>
        <Column>
          <SectionHeader>Address</SectionHeader>
          <FormField
            label="Street"
            type="text"
            name="street"
            value={newContact.street}
            onChange={handleChange}
          />
          <FormField
            label="City"
            type="text"
            name="city"
            value={newContact.city}
            onChange={handleChange}
          />
        </Column>
      </Columns>
      <ButtonContainer>
        <SubmitButton type="submit">Update</SubmitButton>
      </ButtonContainer>
    </form>
  );
};

export default ProfileForm;
