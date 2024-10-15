import { createContext, useContext, useEffect, useState } from "react"
import "../styling/PostItem.css"
import ColouredCircle from "./ColouredCircle";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
export const CommentContext = createContext();

/* eslint react/prop-types: 0 */
function PostItem({post}){
    const [contact, setContact] = useState(null)
    const [comments, setComments] = useState([])
    const { userLoggedIn } = useContext(UserContext)

    const baseContact =   {
        firstName: "Rick",
        lastName: "Sanchez",
        street: "Morty Lane",
        city: "Jerryville",
        gender: "Male",
        email: "rick@sanchez.com",
        jobTitle: "Scientist",
        latitude: 42,
        longitude: 629,
        favouriteColour: "#0d7f26",
        profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
      }

    useEffect(() => {     
            const fetchdata = async () => {
                try{
                const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/contact/" + post.contactId)
                const jsonData = await response.json();
                setContact(jsonData)
                } catch(e){
                    console.log(e)
                    setContact(baseContact)
                }
            };
        fetchdata();
    }, [post.contactId])

    useEffect(() => {
            updateComments();
        }, [comments])

    const updateComments = () => {
        const fetchdata = async () => {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post/" + post.id + "/comment")
            const jsonData = await response.json();
            setComments(jsonData)
         };
         fetchdata();
    }

    const deletePost = async () => {
        const url = "https://boolean-uk-api-server.fly.dev/PandersPanda/post/" + post.id
        console.log(url)
        await fetch(url, {
            method: "DELETE",
        })
    }

    const postUrl = "/view/" + post.id

    if (!contact){
        return <></>
    }

    return(    
        <div className="post">
            <div className="post__header">
                <ColouredCircle firstName={contact.firstName} lastName={contact.lastName} color={contact.favouriteColour}/>
                <Link to={postUrl}><p>{contact.firstName} {contact.lastName}</p></Link>
                {(userLoggedIn.id == post.contactId) && <div className="post_delete" onClick={deletePost}>Delete</div>}
            </div>
            <div className="post_content">
                <span>{post.title}</span>
                <p>{post.content}</p>
            </div>
            <div className="post__commentSection">
                <CommentContext.Provider
                    value={{comments: comments, updateComments: updateComments}}>
                    <CommentList />
                    <CommentInput post={post}/>
                </CommentContext.Provider>
            </div>
        </div>
)
}

export default PostItem