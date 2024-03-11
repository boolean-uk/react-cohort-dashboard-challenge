import React, { useEffect, useState } from "react";
import ProfilePicture from "../ProfileComponents/ProfilePicture";
import CommentSection from "./CommentSection";
import { Link, useParams } from "react-router-dom";
import { ContactContext, PostContext } from "../../App";
import { useContext } from "react";

function ViewPost() {
  const postContext = useContext(PostContext)
  const contactList = useContext(ContactContext);
  const { id } = useParams()
  const posts = postContext.posts
  const [post, setPost] = useState({
    id: '',
    contactId: '',
    title: '',
    content:''
    })

    let author = contactList.contacts.filter(
      (contact) => Number(contact.id) === Number(post.contactId)
    )

    function log() {
      console.log("view:", post.contactId)
    }
    
    const findPostById = (id) => {
        console.log("Searching for post with postId:", id);
        const post = posts.find(post => Number(post.id) === Number(id));
        console.log("Found post:", post);
        setPost(post);
    };

    useEffect(() => {
        findPostById(id)
    }, [])

    const firstName = author[0]?.firstName;
    const lastName = author[0]?.lastName;
  return (
    <>
      <div className="post-list-items">
        <ProfilePicture firstName={firstName} lastName={lastName} />
        <p>
          {firstName} {lastName}
        </p>
        <p>
            {post.title}
        </p>
        <p>
            {post.content}
        </p>
        <CommentSection id={id} />
      </div>

    </>
  );
}

export default ViewPost;
