import React, { useContext } from 'react'
import { PostContextAPIContext } from '../contextAPI/PostContextAPI'
import LeftNavBar from '../components/LeftNavBar'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import SinglePost from '../components/dashboard/post/SinglePost'
import '../style/singlePostPage/singlePostPage.css'
import axios from 'axios'
import { HttpRequestsContextAPIContext } from '../contextAPI/HttpRequestsContextAPI'

function SinglePostPage() {

    const {posts, setPosts} = useContext(PostContextAPIContext);
    const {baseURL} = useContext(HttpRequestsContextAPIContext);

    const {postId} = useParams(); 
    if(posts.length === 0) {
        
        const fetchData = async () => {
            const response = await axios.get(baseURL);
            setPosts(response.data)
        }
        
        fetchData();
    }


    const correctPost = posts.find(post => Number(post.id) === Number(postId));

    if(correctPost === undefined) {
        return <div>Element doesnt exist in posts</div>
    }
  return (
    <div className='singlePostPage-container'>
          <div className="leftNavBar">
              <LeftNavBar />
          </div>
          <div className="header">
              <Header />
          </div>
          <div className='singlePostPage-content'>
              <SinglePost post={correctPost} />
          </div>
   
      </div>

   
  )
}

export default SinglePostPage
