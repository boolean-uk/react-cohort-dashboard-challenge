import { useContext, useState } from "react"
import Avatar from "react-avatar"
import { AppContext } from "../../../App"
function CreateComment() {
    const [comment, setComment] = useState([])
    const {loggedInUser} = useContext(AppContext)
    function handleChange(event){
        const [name, value] = event.target
        setComment([...comment, {[name]: value}])
    }

    return(
        <div>
            <Avatar className="post-avatar" name={`${loggedInUser.firstName} ${loggedInUser.lastName}`} round={true}/>
                <input type="text" 
                    placeholder="Add a comment..."
                    id="comment"
                    name="comment"
                    onChange={handleChange}></input>
        </div>
    )
}