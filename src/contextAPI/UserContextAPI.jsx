import { createContext, useState } from 'react';

const UserContextAPIContext = createContext();


const UserContextAPIProvider = ({children}) => {
    const [user, setUser] = useState();

    return (

    <UserContextAPIContext.Provider
    value={{
        user,
        setUser,
    }}>
    
    {children}
    </UserContextAPIContext.Provider>

    )
}


export {UserContextAPIContext, UserContextAPIProvider}