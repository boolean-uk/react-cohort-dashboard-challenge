import Avatar from "../common/Avatar"
import { useContext } from 'react'
import { MetaContext } from '../../App'

function PostPost() {
    const {loggedIn} = useContext(MetaContext)

    return (
        <div style={{ margin: '20px', padding: '15px', backgroundColor: '#ffffff', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                    <Avatar />
                </div>
                <div>
                    <form action="">
                        <input type="text" name="post" id="post" placeholder="What's on your mind?"/>
                    <button>Post</button>
                    </form>
                </div>
            </div>

        </div>
    ) 
}

export default PostPost