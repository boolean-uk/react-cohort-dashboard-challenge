import Header from './Header'
import LeftMenu from './LeftMenu'
import CreatePost from './CreatePost'
import PostItemList from './posts/PostItemList'
import "/src/style/DashBoard.css"

export default function DashBoard () {
    return(
        <div className="dashBoard" >
            <Header/>
            <LeftMenu/>
            <div className="view">
              <CreatePost/>
              <PostItemList/>
            </div>
        </div>
    )
}