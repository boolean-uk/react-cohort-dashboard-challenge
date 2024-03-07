import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../App"
import { Post } from './post.jsx'
import NewPost from './newPost.jsx'

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
          <NewPost user={context.user} baseURL={context.baseURL}/>
            {
              [...posts]
              .sort((a, b) => b.id - a.id)
              .map((post, index) => (
                <Post key={index} post={post} baseURL={context.baseURL} user={context.user} />
              ))
            }
        </main>
    )
}
export default Posts