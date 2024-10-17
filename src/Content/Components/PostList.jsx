import { useContext } from "react";
import PostListItem from "./PostListItem";
import { ContentContext } from "../../Helper/Contex";


export default function PostList({elements}){
    const {users}= useContext(ContentContext)
    return(
        <ul className="postList">
            {elements.map((element, index) => (<PostListItem element={element} key={index} users={users}/>))}
        </ul>
    )
}