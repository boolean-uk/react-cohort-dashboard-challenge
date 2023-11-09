import PostTitle from "./PostTitle"
import UserIcon from "../../../../../UserIcon"
import UserName from "../../../../../UserName"

export default function PostHeader() {
  return <div className="post-header">
    <UserIcon />
    <UserName />
    <PostTitle />
  </div>
}