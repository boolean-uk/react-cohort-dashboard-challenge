import React, { useEffect, useState} from "react";
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import CommentList from "./CommentList";




function Home(){
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
   

      return (
        <div>
            <NewPostForm setPosts={setPosts}/>
          
            <PostList posts={posts}/>
            <CommentList comments={setComments}/>
           
        </div>
      );
}
export default Home;