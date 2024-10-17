/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/postItem.css'
import Avatar from './Avatar'
import CommentItem from './CommentItem';
import CommentFeed from './CommentFeed'

export default function PostItem({ post }) {

    const[postComments, setPostComments] = useState([]);
  /*  const[showAllComments, setshowAllComments] = useState(false); //setting to false, because we initially dont want to show all the comments.

    //console.log(post)
   */

  useEffect(() => {
    const fetchCommentsdata = async () => {
        try {
            const responsedata = await fetch(`https://boolean-uk-api-server.fly.dev/alihaiderkhannn/post/${post.id}/comment`);
            if (responsedata.ok) {
                const jsondata = await responsedata.json();
                setPostComments(jsondata);
            }
            else {
                console.error("Failed to fetch comment");
            }
        }
        catch(error){
            console.error("Error while fetching the comments", error);
        }

    }
    fetchCommentsdata();

}, [post, post.id, setPostComments]);

    if (!post){
        return <>No post</>;
    }

  //  console.log(JSON.stringify(postComments, null,2));

    return (
        <div className="post-content">
            <div className='post-content-header'>
                <Avatar color={post.favouriteColour} firstName={post.firstName} lastName={post.lastName} favouriteColour={post.favouriteColour} />
                <div className='post-content-header-inner'>
                    <h3>{post.firstName + " " + post.lastName}</h3>
                    <h4>{post.title}</h4>
                </div>
            </div>
            <p>{post.content}</p>
            <div className='comment-container'>
              {postComments.map((comment) => (
                  <CommentItem comment={comment} key={comment.id} />

                   // <p key={comment.id}>{comment.content}</p>
                ))} 

                
            </div>
            
        </div>
    )
}





/*

PvV2KG0sTrAZX/Qs9heWvHhBy976icG0h7T/+E3g

*/
