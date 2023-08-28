import { useContext, useEffect } from "react";
import NewPostForm from "./components/NewPostForm";
import PostFeed from "./components/PostFeed";
import shuffle from "../../utilities/shuffle";
import DataContext from "../../DataContext";

export default function Dashboard() {
  const { posts, setPosts } = useContext(DataContext)

  const updatePosts = (newPost) => {
    setPosts([newPost, ...posts])
  }

  async function getPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    const randomPosts = shuffle(json).splice(0,5)
    // console.log(randomPosts)
    setPosts(randomPosts)
  }

  useEffect(() => {
    if (!posts) {
      getPostsData()
    }
    console.log('Dashboard::useEffect posts', posts)
  }, [])

  return (
    <main className='main dashboard'>
      <NewPostForm updatePosts={updatePosts} />
      {
        posts && <PostFeed posts={posts} />
      }
    </main>
  )
}