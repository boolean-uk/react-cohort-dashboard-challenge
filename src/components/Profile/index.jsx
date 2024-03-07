import { useContext } from "react"
import { AppContext } from "../../App"

function RenderProfile() {
    const {loggedInUser} = useContext(AppContext)

    return(
        <article>
            <div>
                <h2>{loggedInUser.firstName} {loggedInUser.lastName}</h2>
            </div>
            <ul>
                <h3>Contant Info</h3>
            </ul>
        </article>
    )
}

export default RenderProfile