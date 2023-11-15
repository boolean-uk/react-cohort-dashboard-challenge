import ProfileInitialsBadge from '../topbar/ProfileBadge'
import Topbar from '../topbar/Topbar'
import './share.css'

import ProfileBadge from '../topbar/ProfileBadge';  // Make sure the path is correct

function Share() {
    // Assuming displayInitials is a variable holding the initials value
    const displayInitials = "JD";  // Replace this with your logic to get the initials

    return (
        <div className="sharetop">
            <div className="userlogo">
                    <ProfileBadge initials={displayInitials} />
                    </div>
                <span><input className="inputbutton"placeholder="What's on your mind?" type="text" /></span>
            
            <button className="postbutton">Post</button>
        </div>
    );
}

export default Share;

