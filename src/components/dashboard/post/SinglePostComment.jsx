import { useContext, useEffect, useState } from "react";
import "../../../style/dashboard/singlePostComment.css";
import { HttpRequestsContextAPIContext } from "../../../contextAPI/HttpRequestsContextAPI";
import axios from "axios";

const SinglePostComment = (props) => {
    const {comment} = props ?? {};
  

    const [contact, setContact] = useState();

    const {baserURLContact} = useContext(HttpRequestsContextAPIContext)

    useEffect(() => {

        const fetchData = async () => {
            const contactResponse = await axios.get(baserURLContact + `/${comment.contactId}`)
            setContact(contactResponse.data)
        }
        fetchData();
    }, []);



    if(!contact || !comment) {
        return <div>Loading...</div>
    }

    return(
        <>
        <div>
            <div className="circle " style={{backgroundColor: contact.favouriteColour}}>
                <span className="initials">{contact.firstName[0]}{contact.lastName[0]}</span>
            </div>
            <h3>
                {contact.firstName}  
            </h3>
            {comment.content}
            
        </div>
        </>
    )
}

export default SinglePostComment;