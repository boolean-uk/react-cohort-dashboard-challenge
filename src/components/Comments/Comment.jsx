import PropTypes from 'prop-types'
import Avatar from '../common/Avatar'
import { MetaContext } from "../../App"
import { useContext } from "react"

console.log()
function Comment({comment}) {
    const {contacts} = useContext(MetaContext)
    const contact = contacts.find(c => c.id === comment.contactId)

    //console.log(comment)
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                    <Avatar contactId={contact.id}/>
                </div>

                <div>
                    <h3 style={{ marginBottom: '0px' }}>{contact.firstName + " " + contact.lastName}</h3>
                    <p style={{ marginTop: '5px', color: '#64648c' }}>{comment.content}</p>
                </div>
            </div>
        </>
    )
}

Comment.propTypes = {
    index: PropTypes.number,
    comment: PropTypes.object
}

export default Comment