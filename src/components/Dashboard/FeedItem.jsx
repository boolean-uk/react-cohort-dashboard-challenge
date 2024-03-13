/* eslint-disable react/prop-types */

export default function FeedItem({ post, users }) {
    const { title, content } = post
    const user = users.find(user => user.id === post.contactId + 1)
    const { firstName, lastName } = user || {}
    
    return (
      <>
        <div className="FeedItem">
          <div className="profile-icon" style={{ background: user.favouriteColour }}>
            {user.firstName.charAt(0)} {user.lastName.charAt(0)}
          </div>
          <div>
            <div className="firstname-lastname">
              <span className="firstname">{firstName}</span>
              <span className="lastname">{lastName}</span>
            </div>
            <div className="profile-description">{title}</div>
          </div>
        </div>
        <div className="message-item">{content}</div>
      </>
    );
  }
  