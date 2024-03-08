import ProfilePicture from '../reusable/ProfilePicture'
import { AppDataContext } from '../../App'
import { useContext, useState } from 'react'

function MakePost() {
  const context = useContext(AppDataContext)
  const [contentField, setContentField] = useState("")

  

  const handleOnClick = (event) => {
    event.preventDefault()
    const post = {
      id: context.posts.length + 1,
      contactId: context.currentUser.id,
      title: "How do i set title?! please help!",
      content: contentField
    }

    postRequest(post)
    context.setPosts([...context.posts, post])
  }

  const postRequest = (post) => {
    fetch(`https://boolean-api-server.fly.dev/RobinKaastrup/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="make-post">
      
      <form>
        <input className="input-post-content" type="text" placeholder="what's on your mind?" value={contentField} onChange={(e) => setContentField(e.target.value)}/>
        <button className="submit-post" type="submit" onClick={(e) => handleOnClick(e)}>Post</button>
      </form>
    </div>
  )
}

export default MakePost