import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const baseUserUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact'

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState();
    const [primeUser, setPrimeUser] = useState();

    const getPrimeUser = async (userId) => {
        const response = await fetch(`${baseUserUrl}/${userId}`);
        const jsonData = await response.json();
        setPrimeUser(jsonData)
    };

    const getUser = async (userId) => {
        const response = await fetch(`${baseUserUrl}/${userId}`);
        const jsonData = await response.json();
        setUser(jsonData)
    };

    return (
        <UserContext.Provider value={{user, getUser, primeUser, getPrimeUser}}>
            {children}
        </UserContext.Provider>
    )
}

// LMAO this custom hook name...
export const useUser = () => {
    return useContext(UserContext);
}