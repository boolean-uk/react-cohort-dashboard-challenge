import React from 'react'
import CommentlistComponent from '../comment/commentlist.component'
import CommentformComponent from '../comment/commentform.component'
import { useNavigate } from 'react-router-dom'

const PostbodyComponent = (props) => {

    const navigate = useNavigate()

    const { post } = props
    return (
        <>
            <div className="postbody-wrapper">
                {/* Post header*/}
                <div className="postbody-header">
                    

                    <div style={{backgroundColor: post.author.favouriteColour}} className="postbody-profilepicture">
                        {post.author.profileImage ? (
                            <>
                                <img style={{borderRadius: '100px', width: 50, height: 50}} src={post.author.profileImage}/>
                            </>
                        ) : (
                            <>
                                <p>{post.author.firstName.charAt(0)}{post.author.lastName.charAt(0)}</p>
                            </>
                        )}
                        
                    </div>
                    <div className="postbody-headercontent">
                        <p>{post.author.firstName} {post.author.lastName}</p>
                        <p onClick={() => navigate(`/post/${post.id}`, { state: { post: post } })}>{post.title}</p>
                    </div>

                </div>

                {/* Post body*/}
                <div className="postbody-content">
                    {post.content}
                </div>

                <CommentlistComponent comments={post.comments}/>
                <CommentformComponent post={post}/>

            </div>
        </>
    )
}

export default PostbodyComponent