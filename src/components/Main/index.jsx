import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main() {

    return (
        <main className="main">
            <CreatePost></CreatePost>
            <Posts></Posts>
        </main>
    )
}

export default Main