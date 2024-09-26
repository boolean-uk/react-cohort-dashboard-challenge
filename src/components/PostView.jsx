import {  useParams } from "react-router-dom";
import { PostListItem } from "./Dashboard/PostListItem";
import { useEffect, useState } from "react";

function PostView(){
const [post, setPost] = useState(false)
    const { id } = useParams()
    const getUrl = 'https://boolean-api-server.fly.dev/carob16/post/'+id;
console.log(id)
    useEffect(()=>{
        GetPostsById();
    },[id])

    const GetPostsById = async(id)=>{
        try{
          await fetch(getUrl)
              .then(res => res.json())
              .then(data => setPost(data))
            } catch (error) {
              console.error(error);
          }
      }



console.log(post)

    return(
        <><div><PostListItem id={id} content={post.content||''} title={post.title||''} contactId ={post.contactId}/></div></>
    )
}

export default PostView