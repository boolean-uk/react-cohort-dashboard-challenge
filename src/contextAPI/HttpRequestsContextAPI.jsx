import { createContext, useState } from 'react';

const HttpRequestsContextAPIContext = createContext();


const HttpRequestsContextAPIProvider = ({children}) => {
    const baseURL = "https://boolean-api-server.fly.dev/Vegardvog/post";

    return (

    <HttpRequestsContextAPIContext.Provider
    value={{
        baseURL
    }}>
    
    {children}
    </HttpRequestsContextAPIContext.Provider>

    )
}


export {HttpRequestsContextAPIContext, HttpRequestsContextAPIProvider}