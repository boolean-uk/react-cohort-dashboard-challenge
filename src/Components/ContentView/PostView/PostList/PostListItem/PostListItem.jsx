import { baseUserUrl } from '@/Utils/apiUtils'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "./PostListItem.css"
import AccountIcon from '@/Components/AccountIcon/AccountIcon'

const PostListItem = ({post}) => {
    const [user, setUser] = useState()

    const fetchUserData = async (id) => {
        await fetch(baseUserUrl+"/"+id)
            .then((res) => res.json())
            .then((res) => setUser({...res}))
    }

    useEffect(() => {
        if (post) {
            fetchUserData(post.contactId)
        }
    }, [post])

    return (
        <li>
            <div className='post-panel'>
                {user && 
                    <div className="post-user-information-container">
                        <AccountIcon user={user} />
                        <div className='post-user-information'>
                            <span>
                                {user.firstName} {user.lastName}
                            </span> <br/>
                            <span className='post-title'>
                                {post.title}
                            </span>
                        </div>
                    </div>
                }
                <div className='post-content-container'>
                    <p>{post?.content}</p>
                </div>
            </div>
        </li>
    )
}

PostListItem.propTypes = {
    post: PropTypes.object,
}

export default PostListItem