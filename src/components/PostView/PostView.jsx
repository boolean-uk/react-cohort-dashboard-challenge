import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../App";
import MainItem from "../Main/MainItem";

export default function PostView(){
    const [post, setPost] = useState(undefined)       
    const { posts } = useContext(AppContext)
    const { id } = useParams()

    const findPost = () => {
        console.log(posts)
        const post = posts.find(p => p.postId === Number(id))
        setPost(post)
        return post        
    }

    useEffect(() => {
            findPost()                
    }, [posts])
    
        
    return(
    <div className="main-container">
        { post && <MainItem post={post} hide={false}/>}
    </div>
    )
}

/**
 <div className='post-master-container'>
            <div className='post-container'>
            <div className='post-header-container'>
                <div className='post-header-split'>
                <div style={{backgroundColor: 'green'}} className='profile-icon-default'>
                    <p className='font-paragraph'>{`MF`}</p>
                </div>
                <div className='post-header-text'>
                    <b><p className='font-paragraph post-font-person'>{`mike fly`}</p></b>                
                </div>
                </div>

                <p className='font-paragraph'>{`i dont understand`}</p>

                <hr />

                <p className='font-paragraph' style={{color: 'lightgray', cursor:'pointer'}}>See previous comments</p>
                
                { ar.map((c, index) => <Comment key={index} comment={c} />)}

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
                        />
                        <img className='publish-comment' src={sendIcon}/>
                    </div>                              
                </div>

            </div>
            </div>
            <Toaster />    
        </div>   
 */