import { useContactsPosts } from '../../context/ContactPostContext'
import PostItem from './PostItem'

export default function PostList() {
    const { posts, contacts } = useContactsPosts()
    return (
        <div>
        {posts.map((post) => {
            const contact = contacts.find((c) => c.id === post.contactId)

            if (!contact) {
                return null
            }

            return (
                <PostItem
                    key={post.id}
                    post={post}
                    contact={contact}
                    showAllFromStart={false}
                />
            )
        })}
        </div>
    )
}
