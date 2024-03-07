import CreatePost from "./CreatePost"
import Timeline from "./Timeline"

function Home() {

    return(
        <div className="home">
            <CreatePost />
            <Timeline />
        </div>
    )
}

export { Home }