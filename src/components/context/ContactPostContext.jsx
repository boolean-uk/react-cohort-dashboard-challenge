import { createContext, useContext, useState, useEffect } from "react"

const ContactPostContext = createContext()

export function ContactPostProvider({ children }) {
    const [contacts, setContacts] = useState([])
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null)
  
    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact")
            .then((response) => response.json())
            .then((data) => {
                setContacts(data)
                if (data.length > 0) {
                    setUser(data[0])
                }
            })
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/post")
            .then((response) => response.json())
            .then((data) => setPosts(data.reverse()))
            .catch((error) => console.error(error))
    }, [])
  
    return (
        <ContactPostContext.Provider value={{ contacts, setContacts, posts, setPosts, user, setUser }}>
            {children}
        </ContactPostContext.Provider>
    )
}

export function useContactsPosts() {
    const context = useContext(ContactPostContext)
    if (!context) {
        throw new Error("useContactsPosts must be used within a ContactPostProvider")
    }
    return context
}