import { createContext, useState } from 'react';

const HttpRequestsContextAPIContext = createContext();


const HttpRequestsContextAPIProvider = ({children}) => {
    const baseURL = "https://boolean-api-server.fly.dev/Vegardvog/post";
    const baseURLContact = "https://boolean-api-server.fly.dev/vegardvog/contact"
    return (

    <HttpRequestsContextAPIContext.Provider
    value={{
        baseURL,
        baseURLContact,
    }}>
    
    {children}
    </HttpRequestsContextAPIContext.Provider>

    )
}


export {HttpRequestsContextAPIContext, HttpRequestsContextAPIProvider}