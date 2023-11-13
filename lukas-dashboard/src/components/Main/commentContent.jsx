import ProfileLogo from "../Reusable/profileLogo"

export default function CommentContent() {
    const userId = "1"
return (
<>
<div className="commentGrid">
                <ProfileLogo id={userId}/>
                <section className="comment">
                    <h3>Commenter</h3>
                    <p>This is a comment</p>
                </section>
            </div>
</>
)
}