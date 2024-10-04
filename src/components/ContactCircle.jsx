import { Link } from "react-router-dom"

export default function ContactCircle({ contact, showName }) {
    const initials = `${contact?.firstName?.[0] || ''}${contact?.lastName?.[0] || ''}`
    const circleStyle = {
        backgroundColor: contact?.favouriteColour || 'gray', 
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
    }

    if (!contact?.id) {
        return null
    }
  
    return (
        <Link to={`/profile/${contact.id}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={circleStyle}>{initials}</div>
            {showName && contact ? (
            <div>{`${contact.firstName || ''} ${contact.lastName || ''}`}</div>
            ) : null}
        </Link>
    )
}
  
  