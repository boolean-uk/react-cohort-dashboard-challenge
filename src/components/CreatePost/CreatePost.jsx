import { useContext, useState } from "react";
import "../CreatePost/CreatePost.css";
import { PostContext } from "../../App";
import { CreateNewPost } from "../../PostAPIs/PostAPI";

export default function CreatePost() {

    const { posts, setPosts, loggedInUser, username } = useContext(PostContext);

    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        contactId: loggedInUser.id,
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewPost((prev) => ({...prev, [name] : value}));
    }

    const handleSubmit = async () => {
        try {
            const result = await CreateNewPost(newPost, username);
            setPosts([...posts, result]);
            setNewPost({
                title: "",
                content: "",
            });
        } catch (error) {
            console.error("Error in creating a new post: " + error);
        }
    }

    return(
        <section className="createPost">
            <div className="createpost-image" style={{backgroundColor: loggedInUser.favouriteColour}}>
              <p className="initials2">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
            </div>
            <div className="input-container">
            <input className="title-input" type="text" name="title" placeholder="Title.."
                onChange={handleChange} value={newPost.title} />
            <input className="newPostText" type="text" name="content" placeholder="What's on your mind?" onChange={handleChange} value={newPost.content}/>
            </div>
            <button className="postButton" onClick={handleSubmit}>Post</button>
        </section>
    );
}