import React, { createContext, useContext, useState, useEffect } from 'react'
import { fetchUsers } from './api/axios'

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [defaultUser, setDefaultUser] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        const defaultUser = data[0];
        setDefaultUser(defaultUser);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, defaultUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};