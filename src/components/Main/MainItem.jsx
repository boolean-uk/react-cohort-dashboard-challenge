import sendIcon from '../../assets/sendIcon.png'
import { useState, useContext, useEffect } from 'react'
import { AppContext } from "../../App"
import toast, { Toaster } from 'react-hot-toast';

// components
import Comment from './Comment'

export default function MainItem({post}){
    const { user } = useContext(AppContext)
    const {firstName, lastName, favouriteColour, title, content, comments, postId} = post   
    const [hide, setHide] = useState(true)
    const [commentList, setCommentList] = useState([])
    const [data, setData] = useState({
        "postId": postId,
        "content": "",
        "contactId": user
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    
    const submit = () => {
        if (!data.postId || !data.contactId){return}
        if (data.content.trim === ""){return}
        fetch(`https://boolean-api-server.fly.dev/louisshr/post/${data.postId}/comment`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok){
                toast("Your comment is published!")
            }
            else{
                console.log("bad")
            }
        })
    }

    const handleHideComments = () => {
        if (hide){
            const s = comments.slice(0, 3)
            setCommentList(s)
            setHide(prevHide => !prevHide)                
        }
        else{
            console.log("inne")
            setCommentList(comments)
            setHide(prevHide => !prevHide)
        }
    }

    useEffect(() => {
        handleHideComments()
    }, [])

    

    return(                    
        <div className='post-master-container'>
            <div className='post-container'>
            <div className='post-header-container'>
                <div className='post-header-split'>
                <div style={{backgroundColor: favouriteColour}} className='profile-icon-default'>
                    <p className='font-paragraph'>{`${firstName.charAt(0)}${lastName.charAt(0)}`}</p>
                </div>
                <div className='post-header-text'>
                    <b><p className='font-paragraph post-font-person'>{`${firstName} ${lastName}`}</p></b>
                    <p className='post-title'>{title}</p>
                </div>
                </div>

                <p className='font-paragraph'>{content}</p>

                <hr />

                {comments.length > 3 && <p onClick={handleHideComments} className='font-paragraph' style={{color: 'lightgray', cursor:'pointer'}}>See previous comments</p>}
                
                { commentList.map((c, index) => <Comment key={index} comment={c} />)}

                <div className='add-comment-split'>
                    <div className='profile-icon-default'>
                        <p className='font-paragraph'>DL</p>
                    </div>
                    <div className='add-comment-container'>
                        <input
                        className='comment-input'
                        type="text"
                        placeholder="Add a coment"
                        name='content'
                        onChange={handleChange}
                        />
                        <img onClick={submit} className='publish-comment' src={sendIcon}/>
                    </div>                              
                </div>

            </div>
            </div>
            <Toaster />    
        </div>         
    )
}