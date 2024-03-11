import { useContext } from "react"
import { MyContext } from "../../../App"
import React, { useEffect} from 'react';
import InitialCircle from "./InitialCircle";

function CommentList(props) {

  const {post} = props
  const {contacts} = useContext(MyContext)


  useEffect (() => {
    props.setComments(props.getComments(post.id))
  }, []);


  if (!props.comments) return (
    <div>
      loading...
    </div>
  )

  return (
    <div>
      <ul className="comment-list">
        {props.comments.map((comment, index) => (
          <li key={index}>
            <InitialCircle contact={contacts.find(c => c.id === comment.contactId)}/>
            <div className="test">
              <span className="comment-text">{comment.content}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
