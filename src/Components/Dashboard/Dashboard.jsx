import { createContext, useEffect, useState } from "react"
import LeftMenu from "./LeftMenu/LeftMenu"
import NewPostForm from "./NewPostForm/NewPostForm"
import Content from "./Content/Content"
export const PostContext = createContext()
export const ContactContext = createContext()
export const LoadingContext = createContext()

function Dashboard() {
    const [posts, setPosts] = useState(undefined)
    const [contacts, setContacts] = useState(undefined)
    const [loading, setLoading] = useState(false)

    async function getPosts() {
        setLoading(true)
        await fetch("https://boolean-api-server.fly.dev/kristianverduin/post")
            .then(res => res.json())
            .then(res => res.reverse())
            .then(res => setPosts([...res]))
        setLoading(false)
    }

    async function getContacts() {
        await fetch("https://boolean-api-server.fly.dev/kristianverduin/contact")
            .then(res => res.json())
            .then((contacts) => setContacts([...contacts]))
    }
    
    useEffect(() => {
        getPosts()
        getContacts()
    }, [])

  return (
    <PostContext.Provider value={{ posts: posts, setPosts:setPosts, getPosts: getPosts}}>
      <ContactContext.Provider value={{ contacts: contacts, setContacts: setContacts}}>
        <LoadingContext.Provider value={{ loading: loading, setLoading: setLoading }}>
          <div className='dashboard'>
            {contacts &&
              <LeftMenu />
            }
            <div className='posts'>
              {contacts &&
                <NewPostForm />
              }
              {(!loading && posts && contacts) &&
                <Content />
              }
            </div>
          </div>
        </LoadingContext.Provider>
      </ContactContext.Provider>
    </PostContext.Provider>
  )
}

export { Dashboard }
