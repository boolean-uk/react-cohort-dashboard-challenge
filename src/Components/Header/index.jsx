import { useState, useEffect } from 'react';
import HeaderIcon from '/src/assets/icons/header-logo.svg'

export default function Header({posts}) {
    const [currentUser, setCurrentUser] = useState([])

    
    useEffect(() => {
        posts.map(post => {
            fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${post.contactId}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            })
            .catch(error => console.log(error))
      
        })
    }, [posts])

    return (
        <div className="header">    
               <img className='header-logo' src={HeaderIcon} alt="Header-icon" />
            <div className="user-img-container">
               {currentUser.firstName}
            </div>
        </div>
    )
}