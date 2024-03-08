import React, { useContext } from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import { DataContext } from '../../App'

function Feed() {
  const dataContext = useContext(DataContext)

  function getContact(post) {
    const result = dataContext.contacts.find(
        contact => contact.id === post.contactId)
        
    if(result)
        return result
    else
        return ({firstName: "User", lastName: "Name", profileImage: ''})
  } 

  return (
    <section className='feed'>
      <CreatePost/>
      {dataContext.posts.toReversed().map((post, index) => (
        <Post 
          key={index}
          data={post}
          contact={getContact(post)}
        />))
      }
    </section>
  )
}

export default Feed