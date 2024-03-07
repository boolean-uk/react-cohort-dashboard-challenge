import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../App"
import { Post } from './post.jsx'

function Posts(){

  const context = useContext(MyContext)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${context.baseURL}/post`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
    }, [context.baseURL, setPosts]);

    return(
        <main className="main green">
            {
              posts.map((post, index) => (
                <Post key={index} post={post} baseURL={context.baseURL} />
              ))
            }
        </main>
    )
}
export default Posts