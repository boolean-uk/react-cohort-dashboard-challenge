import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CohortAppContext } from "../../context";
import { createContext, useContext, useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";
import { update } from "../../api/api";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProfileHeaderContainer = styled.h2`
  margin-top: 10px;
  align-self: flex-start;
  margin-left: 70px;
  font-size: 2rem;
  color: #000046;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 90%;
`;

export const ProfileContext = createContext();

const UserProfile = () => {
  const { userId } = useParams();
  const { contacts, setContacts } = useContext(CohortAppContext);

  const user = contacts.find((contact) => contact.id === parseInt(userId, 10));

  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    street: "",
  });

  useEffect(() => {
    if (user) {
      setNewContact({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        city: user.city,
        street: user.street,
      });
    }
  }, [user]);

  if (!user) {
    return <div>User not found</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newContact.firstName || !newContact.lastName || !newContact.email) {
      alert("Please fill in all required fields.");
      return;
    }

    const updatedUserFromApi = await update("contact", user.id, newContact);

    const updatedContacts = contacts.map((contact) =>
      contact.id === user.id ? updatedUserFromApi : contact
    );

    setContacts(updatedContacts);
  };

  const ContextValues = {
    newContact,
    setNewContact,
    user,
    handleChange,
    handleSubmit,
  };

  return (
    <Profile>
      <ProfileHeaderContainer>Profile</ProfileHeaderContainer>
      <Card>
        <ProfileContext.Provider value={ContextValues}>
          <ProfileHeader firstName={user.firstName} lastName={user.lastName} />
          <ProfileForm
            newContact={newContact}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </ProfileContext.Provider>
      </Card>
    </Profile>
  );
};

export default UserProfile;
