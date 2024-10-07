import React, { createContext, useContext, useEffect, useState } from 'react'

import './feed.css'
import PostformComponent from './post/postform.component'
import PostlistComponent from './post/postlist.coponent'
import { ApiContext } from '../../contexts/apiprovider'

export const PostContext = createContext()

const FeedComponent = () => {
  const { GetParsedData } = useContext(ApiContext)
  const [postlist, setPostlist] = useState()

  const FetchPosts = async () => {
    let postData = await GetParsedData()
    setPostlist(postData)
  }

  useEffect(()=>{
    FetchPosts()
  }, [])


  return (
    <>
      <div className="feed-wrapper">
        <PostContext.Provider value={{postlist, FetchPosts}}>
          <PostformComponent/>

          <PostlistComponent/>
        </PostContext.Provider>


      </div>
    </>
  )
}

export default FeedComponent
