import { useEffect, useState } from "react";
import Post from "./Dashboard/components/Post";
import { useLocation } from "react-router-dom";

export default function ViewPostPage() {
  const [post, setPost] = useState(null)
  const location = useLocation()
  
  useEffect(() => {
    if (location.state) {
      setPost(location.state.post)
    }
  }, [])

  return (
    post && <Post post={post} />
  )
}