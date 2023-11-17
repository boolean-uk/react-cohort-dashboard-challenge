import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pfp from "../../shared-components/Pfp/profilePicture";
import Post from "./post";

import { get } from "../../controller";
const postApi = "https://boolean-api-server.fly.dev/Radio58/post";


export default function PostPage({ activePost, contacts }) {
    const userInfo = contacts.find(cont => cont.id === activePost.contactId)

    
    return (
    <>
    <main className="post-page">
      <Post postInfo={activePost} userInfo={userInfo} />
    </main>
    </>
  );
}
