import { useState, createContext, useEffect } from "react";

const UsersContext = createContext({ users: [], setUsers: () => {} });

function UsersProvider({ children }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/PerikK/contact/")
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }



  // console.log("in Cntx", users);

  const value = {
    users,
    setUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}
export { UsersContext, UsersProvider };
