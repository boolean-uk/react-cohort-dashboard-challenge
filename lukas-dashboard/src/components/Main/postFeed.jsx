import { useEffect, useState } from "react"
import { get, contactURL, postURL } from "../client.jsx"
import ProfileLogo from "../Reusable/profileLogo";



export default function PostFeed() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        get(contactURL)
            .then(data => setUsers(data))

        get(postURL)
            .then(data => setPosts(data))

    }, [])
    console.log(users)
    console.log(posts)

    return (
        // <div>
        //     <ProfileLogo />
        //     <PostName/>
        //     <Title/>
        // </div>
        // <hr />
        // <div>
        //     <p>See previous comments</p>
        //     <Comment/>
        // </div>
        <>
            <div className="postInfo">
                <ProfileLogo></ProfileLogo>
                <h2>Lukas Dembicki</h2>
                <p>This is a Title</p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rem nemo quidem animi id quos possimus ipsam maxime magni aspernatur fugit cumque delectus voluptate doloribus natus voluptatibus unde deserunt sed.
            </p>
            <div>
                <hr />
                <p>See previous comments</p>
            </div>
            <div className="comment">
                <ProfileLogo></ProfileLogo>
                <h3>Fiona Hutchison</h3>
                <p>This is a comment</p>
            </div>
            <div>
                <form action="">
                    <input type="text" placeholder=" Add a comment" />
                </form>
            </div>
        </>
    )
}