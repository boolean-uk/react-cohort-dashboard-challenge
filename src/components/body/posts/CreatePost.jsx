import ProfilePicture from "../../ProfilePicture"
import "../../../styles/CreatePost.css"
import { UsersContext, ConnectionContext } from "../../../App"
import { useContext, useState } from "react"

const url = "https://boolean-api-server.fly.dev/Vayeros/post";

function CreatePost() {
  const { currentUser, setPosts } = useContext(UsersContext);
  const {url} = useContext(ConnectionContext);
  const [personalPost, setPersonalPost] = useState({})

  const changePersonalpost = (event) => {
      const {name, value} = event.target;
      setPersonalPost({...personalPost, [name]: value})
  }

  const submitPost = (event) => {
      event.preventDefault();
      fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          }, 
          body: JSON.stringify({
              ...personalPost,
              contactId: currentUser.id,
          }),
      }).then(res => res.json()).then(data => setPosts(posts => [...posts, data]))
      setPersonalPost({})
  }

  if(!currentUser) return <h1>Loading ...</h1>

    return(
      <>
        <form className='create-post' onSubmit={submitPost}>
            <div className='post-create'>
                <div className='profile-picture'>
                    <ProfilePicture 
                        firstName={currentUser.firstName} 
                        lastName={currentUser.lastName} 
                        favouriteColour={currentUser.favouriteColour}/>
                </div>
                <div className='post-inputs'>
                    <input type="text" name="title" value={personalPost.title} onChange={changePersonalpost} className='post-bar title-input' placeholder="What's on your mind?"></input>
                    <input type="text" name="content" value={personalPost.content} onChange={changePersonalpost} className='post-bar content-input' placeholder="Please elaborate"></input>
                </div>
                <button onClick={submitPost} className='post-btn'>Post</button>
            </div>
        </form>
      </>
    ) 
}

export default CreatePost