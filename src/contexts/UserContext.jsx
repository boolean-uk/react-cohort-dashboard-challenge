import { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://boolean-api-server.fly.dev/giarreh/contact/1');
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      {!loading && children}
    </UserContext.Provider>
  )
}
