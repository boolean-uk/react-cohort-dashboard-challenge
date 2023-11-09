import Header from "../Header"
import Navigation from "../Navigation"
import Main from "../Main"

function HomePage() {

    return(
        <div className="container">
            <Header></Header>
            <Navigation></Navigation>
            <Main></Main>
        </div>
        
    )
}

export default HomePage