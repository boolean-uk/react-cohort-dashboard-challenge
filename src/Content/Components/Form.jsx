import { useContext, useState } from "react";
import { ContentContext } from "../../Helper/Contex";
import ProfileCircle from "../../Helper/profileCircle";

export default function Form() {
    const [postData, setPostData] = useState({
        title:'uknown',
        content:'',
        contactId: 1  
    })
    const {createPost} = useContext(ContentContext)

    const submit = (event) =>{
        event.preventDefault()
        createPost(postData)
        setPostData({...postData, content:'' })
    }

    const handleChange = (event) =>{
        event.preventDefault()
        const {value} = event.target
        setPostData({...postData, content:value})
    }

    return (
        <div className="createTopic">
            <div className="circlepost">
                <ProfileCircle initials={'aw'} />
            </div>
            <div className="fillinform">
                <form onSubmit={submit} className="createform">
                    <div className="helpme">
                        <label>
                            <textarea name='newPost' value={postData.content} onChange={handleChange} />
                        </label>
                        <input type="submit" />
                    </div>
                </form>
            </div>

        </div>
    )
}