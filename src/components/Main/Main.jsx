import { useState, useEffect } from "react"
import MainItem from "./MainItem"
import Post from "./Post" 

export default function Main(){
    const [posts, setPosts] = useState([])

    async function GetPosts(){
        try{
            const responsePosts = await fetch("https://boolean-api-server.fly.dev/louisshr/post",{
                method: 'GET'
            })        

            const responseContacts = await fetch("https://boolean-api-server.fly.dev/louisshr/contact",{
                method: 'GET'
            })

            const postsData = await responsePosts.json()
            postsData.reverse()
            const contactsData = await responseContacts.json()
            const data = postsData.map(p => ({
                ...p,
                ...contactsData.find(c => c.id === p.contactId),
                postId: p.id
            }))                        
            
            const dataWithComments = await Promise.all(data.map(async (d) => {
                const comment = await GetComments(d.postId);                
                return {
                    ...d,
                    comments: comment
                };
            }));        
            
            const dataCommentsContact = dataWithComments.map(d => ({
                ...d,
                comments: d.comments.map(comment => ({
                    ...comment,
                    ...contactsData.find(contact => contact.id === comment.contactId)
                }))
            }))                 
                
            console.log(dataCommentsContact)
            setPosts(dataCommentsContact)
        }
        catch(error){
            console.log("Error in GetPosts(): " + error)
        }
    }

    async function GetComments(id){
        const response = await fetch(`https://boolean-api-server.fly.dev/louisshr/post/${id}/comment`, {
            method: 'GET'
        })
        const data = await response.json()        
        return data
    }

    useEffect(() => {
        const fetchData = async () => {
            await GetPosts()
        }
        fetchData()        
    }, [])    
    
    return (
        <>
            <div className="main-container">
                <Post/>
                { 
                    posts.map((p, index) => <MainItem key={index} post={p}/>)
                }                
            </div>
        </>
    )
}