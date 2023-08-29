import { useContext, useEffect } from "react";
import NewPostForm from "./components/NewPostForm";
import PostFeed from "./components/PostFeed";
import shuffle from "../../utilities/shuffle";
import DataContext from "../../DataContext";

export default function Dashboard() {
  const { posts, setPosts } = useContext(DataContext)

  const updatePosts = (newPost) => {
    /** NOTE:
     * every time a new post is supposed to be created,
     * api keeps returning the same id (101)
     * fix issue by manually updating id of new post, when necessary
     */
    const newestPostId = posts[0].id
    if (newPost.id <= newestPostId) {
      newPost.id = newestPostId + 1
    }
    setPosts([newPost, ...posts])
  }

  async function getPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    const randomPosts = shuffle(json).splice(0,5)
    setPosts(randomPosts)
  }

  useEffect(() => {
    if (!posts) {
      getPostsData()
    }
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