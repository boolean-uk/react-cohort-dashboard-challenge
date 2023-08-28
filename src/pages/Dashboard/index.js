import { useEffect, useState } from "react";
import NewPostForm from "./components/NewPostForm";
import PostFeed from "./components/PostFeed";
import shuffle from "../../utilities/shuffle";

export default function Dashboard() {
  const [posts, setPosts] = useState(null)

  async function getPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    const randomPosts = shuffle(json).splice(0,5)
    console.log(randomPosts)
    setPosts(randomPosts)
  }

  useEffect(() => {
    getPostsData()
  }, [])

  return (
    <main className='main dashboard'>
      <NewPostForm />
      {
        posts && <PostFeed posts={posts} />
      }
    </main>
  )
}