import Post_List from "../home/components/postList";
import Post from "../home/components/post";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postContext } from "../App";

export default function Individual_Post(){
    const {id} = useParams();
    console.log(Number(id))

    const {posts}=useContext(postContext)
    console.log(posts)
    return(
        <div>
            <Post post={posts[Number(id)]}/>
        </div>
    )

}