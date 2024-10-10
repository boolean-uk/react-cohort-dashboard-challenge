import Comment_List from "./comment_list"
import NewComment from "./new_comment"
import { useState } from "react"
import { Link } from "react-router-dom"
import Profile_Icon from "../../header/components/profile_icon"
export default function Post({post, num}){


    const [comments, setComments]=useState([])

    return (
        <div className="post">
          <div className="post_header">
            <Profile_Icon user={post.user} />
            <div className="name_title">
              {post.user.firstName}&nbsp;{post.user.lastName}
              <br />
              <Link to={"/post/" + num}>{post.title}</Link>
            </div>
          </div>
    
          <br />
          <br />
          {post.message}
          
          <hr/>
          <div className="commentSection">
            <Comment_List comments={comments} />
            <NewComment comments={comments} setComments={setComments} />
          </div>
        </div>
      );
}