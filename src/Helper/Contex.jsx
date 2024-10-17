import { createContext, useEffect, useState } from "react"

export const ContentContext = createContext();

export default function PostContext({ children }) {
    const [posts, setPosts] = useState([])
    const [newPost,setNewPost] = useState()
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])

    const url = 'https://boolean-uk-api-server.fly.dev/panfi98/post'
    const userUrl = 'https://boolean-uk-api-server.fly.dev/panfi98/contact/'
    const commentUrl= 'https://boolean-uk-api-server.fly.dev/panfi98/post/2/comment'



    const createPost = async (data) => {
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        getPosts()
    }

    const getPosts = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data)
    }

    const getAPost = async (id) => {
        const response = await fetch(url + `/${id}`)
        const data = await response.json()
        setPost(data)    

    }

    const getUserData = async () => {
        const response = await fetch(userUrl)
        const data = await response.json()
        setUsers(data)
    }

    const getCommentByPost = async (postId) =>{
        const response = await fetch(url + `/${postId}/` + 'comment')
        const data = await response.json()
        console.log('success')
        setComments(data)
    }


    useEffect(() => {
        getUserData()
    }, [])
  

    


    return (
        <ContentContext.Provider
            value={{
                posts: posts,
                newPost: newPost,
                comments: comments,
                users: users,
                setNewPost: setNewPost,
                getPosts: getPosts,
                createPost: createPost,
                getUserData: getUserData,
                getCommentByPost: getCommentByPost,
                getAPost: getAPost
            }}>
            {children}
        </ContentContext.Provider>
    )
}