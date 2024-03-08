import React, { useContext } from "react";
import { UserCommentContext } from "../App";

function CommentProfile({user}) {

    if (!user || !user.firstName || !user.lastName) {
        return null; 
    }

    return (
        <div
            style={{
                background: `${user.favouriteColour}`,
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
            }}
        >
            <p>{user.firstName.charAt(0)} {user.lastName.charAt(0)}</p>
        </div>
    );
}

export default CommentProfile;
