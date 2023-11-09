import Header from "../Header"
import Navigation from "../Navigation"
import Main from "../Main"

function HomePage({ posts }) {

    return(
        <div className="container">
            <Header></Header>
            <Navigation></Navigation>
            <Main posts={posts}></Main>
        </div>
        
    )
}

export default HomePage