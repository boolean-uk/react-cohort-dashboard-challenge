import '../styles/createpost.css'
import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function CreatePost() {
    const { posts, setPosts, postWithUserData, setPostWithUserData } = useContext(AppContext);
    const user = postWithUserData[0];

    const [postinfo, setPostInfo] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!user) {
            console.error('User is not defined. Can not create a post');
            return;
        }

        if(!postinfo) {
            console.error('Post content does not contain anything');
            return;
        }

        try {

            const response = await fetch('https://boolean-uk-api-server.fly.dev/alihaiderkhannn/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: '',
                content: postinfo,
                contactId: user.id
            })
                
            });

            if(response.ok) {
                const newPost = {
                    title: '',
                    content: postinfo,
                    contactId: user.id
                }

                setPosts([newPost, ...posts])
                setPostWithUserData([newPost, ...postWithUserData ])
                setPostInfo('')
            }
            else {
                console.error('Failed to create post', response.statusText)
            }
        }
        catch(error) {
             console.error('Error while creating a post', error)
        }

        
        
    }


    const handlechange = async (event) => {  //handling changes in form input.
        setPostInfo(event.target.value)
       // console.log(postinfo)

    }




    return (
        <div className="postcreate-container">
            <div className="input-container">
                    <input type="text"
                        placeholder="Whats on your mind?"
                        value={postinfo}
                        onChange={handlechange}
                         />
                            <button className="post-botton" onClick={handleSubmit} type="submit">Post</button>

                

            </div>
        </div>
    )
}