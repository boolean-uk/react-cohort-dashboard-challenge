import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserType } from '../types/types';

interface UserContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  postUsers: UserType[];
  fetchPostUsers: (id: number) => void;
  setPostUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [postUsers, setPostUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/contact/8`);
      if (response.ok) {
        const data = await response.json() as UserType;
        setUser(data);
      }
    };
    fetchUsers();
  }, []);

  const fetchPostUsers = async (id: number) => {

    // Got an error when trying to fetch user with id 42, so added a check to prevent it.
    if (id !== 42) {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/stian96/contact/${id}`);
      if (response.ok) {
        const data = await response.json() as UserType;
        const userExists = postUsers.some((user) => user.id === data.id);
        if (!userExists) {
          setPostUsers((prevUsers) => [...prevUsers, data]);
        }
      }
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, postUsers, setPostUsers, fetchPostUsers }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('User hook must be used within a UserProvider');
  }
  return context;
}
