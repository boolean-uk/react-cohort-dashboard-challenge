/* eslint-disable react/prop-types */
import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../Feed/Comment.css"
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../App";


export default function Comment( {comment} ) {
    const { users } = useContext(AppContext)
    
    const user = users.find(u => u.id === comment.contactId)

    
    return(
        <>
            <div className="comment">
                <div className="comment-profile-logo" style={{backgroundColor: user.favouriteColour}}>
                    <p className="initial-comment" >{user.firstName.charAt(0)}{user.lastName.charAt(0)}</p>
                    
                </div>
                <div className="comment-content">
                    <span className="comment-username">{user.firstName} {user.lastName}</span>
                    <div className="comment-text">{comment.content}</div>
                </div>

            </div>
        </>
    )
}