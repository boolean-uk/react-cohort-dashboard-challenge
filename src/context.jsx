import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAll } from "./api/api";

export const CohortAppContext = createContext();

export const CohortAppProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userProfile] = contacts.filter((contact) => contact.id === 1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const contactsData = await getAll("contact");
        setContacts(contactsData);
        const postsData = await getAll("post");
        setPosts(postsData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CohortAppContext.Provider
      value={{
        contacts,
        setContacts,
        posts,
        setPosts,
        loading,
        userProfile,
      }}
    >
      {children}
    </CohortAppContext.Provider>
  );
};

CohortAppProvider.propTypes = {
  children: PropTypes.node,
};
