import { useEffect, useState } from "react"
import PostListItem from "./PostListItem"
import "./PostList.css"


function PostList() {

    const [allPostData, setAllPostData] = useState()

useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Eddy1108/post")
      .then(response => response.json())
      .then(setAllPostData)
  }, [])

  useEffect(() => {console.log(allPostData)}, [allPostData])


    return (
    <div>
        <ul className="post-list">
        {allPostData ? allPostData.map((item, i) =>
            <li className="post-list-element" key={i}>
                <PostListItem post={item} />
            </li>) : <p>Loading...</p>}
        </ul>
    </div>
)
}

export default PostList