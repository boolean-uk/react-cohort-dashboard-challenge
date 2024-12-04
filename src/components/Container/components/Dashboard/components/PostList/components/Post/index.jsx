import "../../../../../../../../assets/css/Post.css"
import "../../../../../../icons/InitialsProfileIcon"
import InitialsProfileIcon from "../../../../../../icons/InitialsProfileIcon";
import { CommentList } from "./components/CommentList"
import { useEffect, useState } from "react";
import * as API from "../../../../../../../../API"
import { Link } from "react-router-dom";

function Post({ post }) {
    // States
    const [comments, setComments] = useState([])
    const [postedByContact, setPostedByContact] = useState({})
    const [initials, setInitials] = useState("")

    useEffect(() => async function () {
        setComments((await API.get("post/" + post.id + "/comment")).data);
        const contactFromApi = (await API.get("contact/" + post.contactId)).data
        setInitials(contactFromApi.firstName.charAt(0) + contactFromApi.lastName.charAt(0))
        setPostedByContact(contactFromApi)
    }, [])

    return (
        <div className="Post-main">
            <div className="Post-container">
                <div className="Post-image-author-title-container">
                    <InitialsProfileIcon
                        color={postedByContact.favouriteColour}
                        initials={initials}>
                    </InitialsProfileIcon>

                    <div className="Post-author-title">
                        <h3>{postedByContact.firstName} {postedByContact.lastName}</h3>
                        <Link to={'/post/' + post.id}>{post.title}</Link>
                    </div>
                </div>
                <p>{post.content}</p>
                <hr />
                <CommentList comments={comments} postId={post.id}></CommentList>
            </div>
        </div>
    )
}

export default Post;