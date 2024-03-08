import { useEffect, useState, useContext } from "react"
import PostListItem from "./PostListItem"
import "./PostList.css"
import { PostContext } from "../Dashboard"


function PostList() {
    const {fetchPosts, allPostData, setAllPostData} = useContext(PostContext)

    // const [allPostData, setAllPostData] = useState()

async function updatePosts(){ 
    await fetchPosts()
}

useEffect(() => {
    updatePosts()
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