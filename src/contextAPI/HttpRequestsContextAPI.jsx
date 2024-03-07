import { createContext, useState } from 'react';

const HttpRequestsContextAPIContext = createContext();


const HttpRequestsContextAPIProvider = ({children}) => {
    const baseURL = "https://boolean-api-server.fly.dev/Vegardvog/post";
    const baserURLContact = "https://boolean-api-server.fly.dev/Vegardvog/contact"
    return (

    <HttpRequestsContextAPIContext.Provider
    value={{
        baseURL,
        baserURLContact,
    }}>
    
    {children}
    </HttpRequestsContextAPIContext.Provider>

    )
}


export {HttpRequestsContextAPIContext, HttpRequestsContextAPIProvider}