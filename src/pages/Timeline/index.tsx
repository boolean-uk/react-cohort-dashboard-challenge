import { useContext } from 'react'
import { PostContext } from '../../App'
import AddPostForm from './components/AddPostForm'
import TimelinePost from './components/TimelinePost'

export default function Timeline() {
    const { posts, isEditing } = useContext(PostContext)

    return (
        <div className='flex flex-col gap-5'>
            {posts.map((post) => (
                <TimelinePost key={post.id} post={post} />
            ))}
            {isEditing ? <AddPostForm /> : ''}
        </div>
    )
}
