import ProfileLogo from "../Reusable/profileLogo"
import SendArrow from "../Reusable/sendArrow"

export default function CommentForm () {

    const userId = "1"

    // const [postComment, setPostComment] = useState(
    //     {
    //         commenterId: 0,
    //         comment: "",
    //     })

    // const handleChange = (event) => {

    //     const value = event.target.value

    //     setPostComment(
    //         {
    //             postId: posts.id,
    //             contactId: userId,
    //             content: value
    //         }
    //     )
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     event.target.reset()

    //     post(`${postURL}/${posts.id}`, postComment)
    //     .then(res => res.json())   
    //     .then (() => get(`${postURL}`)) 
    //     .then(setComments)
    // }

    return (
    <div className="commentForm">
                <ProfileLogo id={userId}/>
                <div className="inputAndButton">
                    <form action="">
                        <input type="text" placeholder="    Add a comment..." />
                    </form>
                    <SendArrow />
                    </div>
            </div>
    )
};