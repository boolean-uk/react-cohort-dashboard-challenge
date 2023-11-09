import Header from "../Header"
import Navigation from "../Navigation"
import Main from "../Main"

function HomePage({ posts, URL }) {

    return(
        <div className="container grid">
            <Header></Header>
            <Navigation></Navigation>
            <Main posts={posts} URL={URL}></Main>
        </div>
        
    )
}

export default HomePage