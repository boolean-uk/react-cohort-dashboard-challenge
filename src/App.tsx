import axios from 'axios'
import { createContext, SetStateAction, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Header'
import Timeline from './pages/Timeline'
import Sidebar from './Sidebar'
import Profile from './pages/Profile'
export const API_POSTS_URL = 'https://boolean-uk-api-server.fly.dev/th0jensen/post'
export const API_CONTACTS_URL =
    'https://boolean-uk-api-server.fly.dev/th0jensen/contact'

export type Post = {
    id: number
    contactId: number
    title: string
    content: string
    comments: Comment[]
}

export type Comment = {
    id: number
    contactId: number
    content: string
}

export type Contact = {
    id: number
    firstName: string
    lastName: string
    street: string
    city: string
    email?: string
    favouriteColor?: string
    gender?: string
    jobTitle?: string
    latitude?: number
    longitude?: number
    profileImage?: string
}

type PostContextType = {
    posts: Post[]
    contacts: Contact[]
    isEditing: boolean
    setIsEditing: React.Dispatch<SetStateAction<boolean>>
}

export const PostContext = createContext<PostContextType>({
    posts: [],
    contacts: [],
    isEditing: false,
    setIsEditing: () => { },
})

export default function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        axios.get<Post[]>(API_POSTS_URL).then((res) => setPosts(res.data.sort().reverse()))
        axios.get<Contact[]>(API_CONTACTS_URL).then((res) => setContacts(res.data))
    }, [])

    useEffect(() => {
        console.log(posts)
    }, [posts])

    return (
        <PostContext.Provider
            value={{
                posts: posts,
                contacts: contacts,
                isEditing: isEditing,
                setIsEditing: setIsEditing,
            }}
        >
            <Router>
                <Header />
                <Sidebar />
                <div className='container z-0 mx-auto pl-24 pt-24'>
                    <Routes>
                        <Route index element={<Timeline />} />
                        <Route path='/profile/:id' element={<Profile />} />
                    </Routes>
                </div>
            </Router>
        </PostContext.Provider>
    )
}
