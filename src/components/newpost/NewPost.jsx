import { useContext, useState,  } from 'react'
import { PostContext } from '../../pages/DashBoard'
import { UserContext } from '../../app/App';
import axios from "axios";
import { useNavigate} from 'react-router';

function NewPost() {
  const { posts, setPost  } = useContext(PostContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(user);

  const [ newPost, setNewPost ] = useState({
    title:'',
    content:'',
    contactId: 1
  });
 

  async function handlePost(e) {
    e.preventDefault() 
    await updatePost();
    // setPost([...posts, newPost])
    console.log(newPost);
    navigate('/')
  }

  // Function to put the post to the API
  async function updatePost() {
    const url = `https://boolean-api-server.fly.dev/KantheeK/post`
    try {
      // setNewPost(prevState => ({ ...prevState, contactId: user.id }));
      const response = await axios.post(url, newPost)
      console.log(response.data)
  } catch (error) {
      console.error("Error: ", error)
  }
  }

  return (
    <div className={"newpost"}>
      <form onSubmit={handlePost}>

        <div className="newpost-content">
          <div className="profile-icon"> <img src={user.profileImage}/></div>
          
        {/* Textholder */}
        <textarea 
          name="title" 
          type="text" 
          placeholder="What's is the title" 
          value={newPost.title} 
          onChange={(e) => setNewPost({...newPost, title: e.target.value})} // Append value from in textarea to newPost
          cols="50" 
          rows="1">
        </textarea>

        <textarea 
          name="content" 
          type="text" 
          placeholder="What's on your mind?" 
          value={newPost.content} 
          onChange={(e) => setNewPost({...newPost, content: e.target.value})} // Append value from in textarea to newPost
          cols="50" 
          rows="10">
        </textarea>
        </div>



        <div className="newpost-action">
          <button type="submit"
          disabled={newPost.content === "" || newPost.title === "" }
           className="post-btn"> 
           Post! 
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default NewPost
