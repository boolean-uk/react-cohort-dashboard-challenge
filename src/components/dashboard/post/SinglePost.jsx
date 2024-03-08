
import PostComment from "./PostComment";
import PostHistory from "./PostHistory";
import "../../../style/dashboard/singlePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HttpRequestsContextAPIContext } from "../../../contextAPI/HttpRequestsContextAPI";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
    const {post} = props ?? {};

    const [contact, setContact] = useState();

    const {baseURLContact} = useContext(HttpRequestsContextAPIContext)

    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(baseURLContact + `/${post.contactId}`);
            if(response) {
                setContact(response.data)
            }
        }
        fetchData();
    }, []);


    if(!contact) {
        return <div>Loading...</div>
    }
    return(
        <>
        <div className="singlePost-container">
        <div className="singlePost-header">
            <div className="circle" style={{backgroundColor: contact.favouriteColour}}>
                <span className="initials">{contact.firstName[0]}{contact.lastName[0]}</span>
            </div>
            <div className="singlePost-title">
                <Link to={`/singlePost/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
               
                
            </div>
            <div>
                {post.content}
            </div>
        </div>
        
        <div className="singlePost-postHistory">
            <PostHistory post={post}/>
        </div>
        <div className="singlePost-postComment">
            <PostComment post={post}/>

        </div>
        </div>
        </>
    )
}

export default SinglePost;