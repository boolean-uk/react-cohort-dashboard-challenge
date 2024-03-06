//import { useContext } from "react";
//import { PostContext } from "../App";

export default function PostItem(props)  {

    const { post, postUser } = props

    return (
      <div className="post_layout">
        <div className="circle">
          <p className="circle_text">
            {postUser.firstName.charAt(0)}
            {postUser.lastName.charAt(0)}
          </p>
        </div>
        <h2 className="post_name_colour">
          {postUser.firstName} {postUser.lastName}
        </h2>
        <h3 className="post_title_colour">{post.title}</h3>
        <p className="normal_text_colour">{post.content}</p>
      </div>
    );
}
