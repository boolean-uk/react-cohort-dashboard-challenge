import { useEffect, useState } from "react"
import { BrowserRouter as useLocation } from "react-router-dom"
import Feed from "./Dashboard/Feed"
import Post from "./Dashboard/Post"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"

export default function Index() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [HomeClicked, setHomeClicked] = useState(false)
  
  const location = useLocation()

  useEffect(() => {
    fetchData()
    fetchUser()
  }, [HomeClicked])

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/hkyksk/post")
      .then((response) => response.json())
      .then((data) => {
        const postsWithCommentsPromises = data.map((post) =>
          fetch(`https://boolean-api-server.fly.dev/hkyksk/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((commentsData) => ({ ...post, comments: commentsData }))
            
        )

        Promise.all(postsWithCommentsPromises)
        .then((postsWithComments) => {
          console.log("Fetched posts with comments:", postsWithComments);
          setPosts(postsWithComments);
        })
          .catch((error) => console.error("Error fetching comments:", error))
      })
      .catch((error) => console.error("Error fetching data:", error))
  }

  const fetchUser = () => {
    fetch("https://boolean-api-server.fly.dev/hkyksk/contact")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        if (data.length > 0) {
          setCurrentUser(data[0])
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
  }

  const handlePost = async () => {
    try {
      const postData = {
        contactId: 0,
        title: '',
        content: inputValue
      }
      
      const jsonString = `{"id":${currentUser.id},${JSON.stringify(postData).slice(1)}`
      
      const response = await fetch("https://boolean-api-server.fly.dev/hkyksk/post", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonString,
      })

      if (response.ok) {
        setInputValue('')
        fetchData()
      } else {
        console.error('Post failed:', response.statusText)
      }
    } catch (error) {
      console.error('Error posting:', error.message)
    }
  }

  return (
    <div className="body">
      <Header currentUser={currentUser}/>
      <Sidebar setHomeClicked={setHomeClicked} HomeClicked={HomeClicked}/>
      <div className="dashboard">
        {location.pathname === '/Home' && (
          <>
            <Post currentUser={currentUser} inputValue={inputValue} setInputValue={setInputValue} handlePost={handlePost}/>
            <Feed posts={posts} users={users} currentUser={currentUser}/>
          </>
        )}
      </div>
    </div>
  )
}
