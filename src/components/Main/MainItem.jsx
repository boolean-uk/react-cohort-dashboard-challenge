import sendIcon from '../../assets/sendIcon.png'
import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../../App"
import toast, { Toaster } from 'react-hot-toast';
import Comment from './Comment'

export default function MainItem(props){
    const { user, getPosts } = useContext(AppContext)
    const navigate = useNavigate()
    const {firstName, lastName, favouriteColour, title, content, comments, postId, contactId} = props.post   
    const [hide, setHide] = useState(props.hide)
    const [commentList, setCommentList] = useState(() => {
        setHide(!hide)
        return hide ? comments.slice(0, 3) : comments

    })
    const [data, setData] = useState({
        "postId": postId,
        "content": "",
        "contactId": contactId
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
                getPosts()
            }
            else{
                console.log("bad")
            }
        })
    }

    const handleHideComments = () => {
        const commentsState = hide ? comments.slice(0, 3) : comments
        setCommentList(commentsState)
        setHide(!hide)       
    }

    const handleClick = () => {
        navigate('/profile', {
            state:{
                id: contactId
            }
        })
    }

    const GetInitals = () => {
        let intials = ""
        const firstName = user.firstName.trim()
        const lastName = user.lastName.trim()
        if (firstName !== "") intials += firstName.charAt(0)
        if (lastName !== "") intials += lastName.charAt(0)
        return intials
      }

    useEffect(() => {              
    }, [getPosts])

    

    return(                    
        <div className='post-master-container'>
            <div className='post-container'>
            <div className='post-header-container'>
                <div className='post-header-split'>
                <div onClick={handleClick} style={{backgroundColor: favouriteColour}} className='profile-icon-default'>
                    <p className='font-paragraph'>{`${firstName.charAt(0)}${lastName.charAt(0)}`}</p>
                </div>
                <div className='post-header-text'>
                    <b><p onClick={handleClick} className='font-paragraph post-font-person'>{`${firstName} ${lastName}`}</p></b>
                    <Link to={`/postview/${postId}`}><p className='post-title'>{title}</p></Link>
                </div>
                </div>

                <p className='font-paragraph'>{content}</p>

                <hr />

                {comments.length > 3 && <p onClick={handleHideComments} className='font-paragraph' style={{color: 'lightgray', cursor:'pointer'}}>See previous comments</p>}
                
                { commentList.map((c, index) => <Comment key={index} comment={c} />)}

                <div className='add-comment-split'>
                    <div className='profile-icon-default' style={{backgroundColor: user?.favouriteColour}}>
                        <p className='font-paragraph'>{user ? GetInitals() : ""}</p>
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