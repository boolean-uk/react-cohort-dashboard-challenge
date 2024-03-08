import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HttpRequestsContextAPIProvider } from './contextAPI/HttpRequestsContextAPI.jsx'
import { UserContextAPIProvider } from './contextAPI/UserContextAPI.jsx'
import { PostContextAPIProvider } from './contextAPI/PostContextAPI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <UserContextAPIProvider>
        <HttpRequestsContextAPIProvider>
          <PostContextAPIProvider>
            <App />
          </PostContextAPIProvider>
        </HttpRequestsContextAPIProvider>
      </UserContextAPIProvider> 
    </BrowserRouter>

  
)
