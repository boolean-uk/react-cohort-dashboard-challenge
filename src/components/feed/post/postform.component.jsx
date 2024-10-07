import React, { useContext, useState } from 'react'
import { UserContext } from '../../../App'
import { ApiContext } from '../../../contexts/apiprovider'
import { PostContext } from '../feed.component'

const PostformComponent = () => {

    const { PostPost } = useContext(ApiContext)

    const { FetchPosts } = useContext(PostContext)

    const { user } = useContext(UserContext)
    const [formIsActive, setFormIsActive] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        content: "",
    })

    async function handleSubmit(event){
        event.preventDefault()
        if(formData.title === "" || formData.content === ""){
            return
        }
        setFormData({
            title: "",
            content: ""
        })
        setFormIsActive(false)
        try {
            await PostData()
            FetchPosts()
        } catch(error){
            console.error(error)
        }

    }

    function handleInput(event){
        setFormData(prev => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    const PostData = async () => {
        await PostPost(formData, user.id)
    }

    return (
        <>
            <div className="postform-wrapper">
                <div className="postform-content">
                    <div style={{backgroundColor: user.favouriteColour}} className="postbody-profilepicture">
                        {user.profileImage ? (
                            <>
                                <img style={{borderRadius: '100px', width: 50, height: 50}} src={user.profileImage}/>
                            </>
                        ) : (
                            <>
                                <p>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</p>
                            </>
                        )}
                        
                    </div>

                    <div style={{height: formIsActive ? 120 : 90}} className="postform-form-wrapper">

                    <form 
                        onFocusCapture={() => setFormIsActive(true)}
                        onBlurCapture={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                setFormIsActive(false);
                            }
                        }}
                        
                        onSubmit={handleSubmit}
                        className="postform-form"
                    >
                    
                    <div style={{height: formIsActive ? 100: 50}} className="postform-form-wrapper">
                        <input 
                            value={formData.title}
                            name="title"
                            onChange={handleInput}
                            onClick={() => setFormIsActive(true)}
                            className="postform-input"
                            placeholder="What's on your mind?"
                        />

                        {
                            formIsActive && 
                            <>
                                <input
                                    value={formData.content}
                                    name="content"
                                    onChange={handleInput}
                                    className="postform-input"
                                    placeholder='...'
                                />
                            </>
                        }
                    </div>
                        <button className="postform-button">Post</button>
                    </form>
                    </div>

                </div>
            </div>     
        </>
    )
}

export default PostformComponent
