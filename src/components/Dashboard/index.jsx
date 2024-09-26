import ProfileImageWrapper from "../ProfileImageWrapper"
import PostForm from "./CreatePost"
import PostList from './PostList'




function DashBoard(){

return(
        <div className="Dashboard">
            <PostForm/>
            <PostList/>
        </div>
        
        )
}

export default DashBoard 