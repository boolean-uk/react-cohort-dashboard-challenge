export default function ProfileLi({ post }) {
    return (
        <li className="post-li">
            <section className="post-content-container">
                <div className="poster-information">
                    <div className="profile-image">
                        <p>{}</p>
                    </div>

                    <div>
                        <p>Name</p>
                        <p>{post.title}</p>
                    </div>
                </div>

                <div>{post.content}</div>
            </section>
            
            <section className="comments-container">

            </section>
        </li>
    )
}