import { useContext } from "react"
import { UsersContext } from "../../App"

export default function CreatePost() {

    const {loggedInuser} = useContext(UsersContext)

    return (
        <section className="post-container">
            <form className="post-form">
                <div className="profile-initials">
                    <p>{}</p>
                </div>
                <div className="text-input-container">
                    <input type="text" name="post" placeholder="What's on your mind?"></input>
                </div>
                <div className="button-container">
                    <button id="post-btn">Post</button>
                </div>
            </form>
        </section>
    )
}