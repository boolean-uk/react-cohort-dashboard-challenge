import { useState, createContext, useEffect } from "react"

const UsersContext = createContext({
	users: [],
	setUsers: () => {},
  currentUser: {},
  setCurrentUser: () => {}
})

function UsersProvider({ children }) {
  const [users, setUsers] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

	// useEffect(() => {
	// 	fetch("https://boolean-api-server.fly.dev/PerikK/contact/")
	// 		.then((response) => response.json())
  //     .then(setUsers)
  // }, [])
  
    useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/PerikK/contact/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        const currUser = data.find((user) => user.id === 1);
        setCurrentUser(currUser || {}); 
      });
  }, [ ]);

  if (!users) {
    return <p>Loading...</p>
  }

  // console.log('from-cntxt', currentUser);
  // console.log('from-cntxt',users);

	const value = {
		users,
    setUsers,
    currentUser,
    setCurrentUser
	}

	return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
export { UsersContext, UsersProvider }
