import Main from "../Main"

import '../../styles/initials.css'

function HomePage({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts }) {

    return(
        <div>
            <Main posts={posts} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} setShouldGetPosts={setShouldGetPosts} />
        </div>
    )
}

export default HomePage