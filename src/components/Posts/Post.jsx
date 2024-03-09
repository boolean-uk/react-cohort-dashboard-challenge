import { useContext, useState, useEffect } from 'react'
import { MetaContext } from '../../App'
import Avatar from '../common/Avatar'
import Comments from '../Comments/Comments'
import PropTypes from 'prop-types'

function Post ({ index }) {
    const {posts} = useContext(MetaContext)
    const {contacts} = useContext(MetaContext) 
    const post = posts[index]
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
    }, [])

    function getComments() {
        fetch(`https://boolean-api-server.fly.dev/Hjaldrgud/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((data) => setComments(data))
      }


    //Ensure stuff loads in time
    const contact = contacts.find((c) => c.id === post.contactId);
    if (!contact) {
    return null
    }

    return (
        <div style={{ margin: '20px', padding: '15px', backgroundColor: '#ffffff', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                    <Avatar contactId={contact.id}/>
                </div>

                <div>
                    <h3 style={{ marginBottom: '0px' }}>{contact.firstName + " " + contact.lastName}</h3>
                    <h5 style={{ marginTop: '5px', color: '#64648c' }}>{post.title}</h5>
                </div>
            </div>
            <div>
                <p style={{ marginTop: '5px', fontSize: '18px'}}>{post.content}</p>
            </div>
            <hr />
            <div>
                <Comments comments={comments} />
            </div>
        </div>
    )
}

Post.propTypes = {
    index: PropTypes.number.isRequired
}

export default Post