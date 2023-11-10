import ProfileLogo from "../Reusable/profileLogo"

export default function PostInfo() {
    return (
        <>
            <div className="postInfo">
                <ProfileLogo></ProfileLogo>
                <section>
                    <h2>Lukas Dembicki</h2>
                    <p>This is a Title</p>
                </section>
            </div>
            <p className="postContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rem nemo quidem animi id quos possimus ipsam maxime magni aspernatur fugit cumque delectus voluptate doloribus natus voluptatibus unde deserunt sed.
            </p>
            <hr />
        </>
    )
}