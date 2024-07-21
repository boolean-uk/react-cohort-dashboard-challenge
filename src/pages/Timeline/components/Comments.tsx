import {
    Post,
    PostContext,
    API_POSTS_URL,
    Contact,
    Comment,
} from '../../../App'
import { useState, useContext, useEffect, SetStateAction } from 'react'
import axios from 'axios'
import { defaultContact } from '../defaultContact'

export default function Comments(props: { post: Post }) {
    const [commentContent, setCommentContent] = useState<string>('')
    const [displayedComments, setDisplayedComments] = useState<{
        number: number
        bool: boolean
    }>({
        number: 3,
        bool: false,
    })
    const { post } = props

    const toggleMoreComments = () => {
        if (displayedComments.number === 3) {
            setDisplayedComments({
                number: post.comments.length,
                bool: true,
            })
        } else {
            setDisplayedComments({
                number: 3,
                bool: false,
            })
        }
    }

    if (!post.comments) {
        return (
            <div className='flex flex-col gap-4'>
                <p>No comments</p>
                <AddComment
                    post={post}
                    content={commentContent}
                    setContent={setCommentContent}
                />
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-4'>
            {post.comments.slice(0, displayedComments.number).map((comment) => (
                <CommentsItem key={comment.id} comment={comment} />
            ))}
            <button
                onClick={toggleMoreComments}
                className='btn bg-base-300 w-32'
            >
                {displayedComments.bool ? 'Show Less' : 'Show More'}
            </button>
            <AddComment
                post={post}
                content={commentContent}
                setContent={setCommentContent}
            />
        </div>
    )
}

function CommentsItem(props: { comment: Comment }) {
    const [commentAuthor, setCommentAuthor] = useState<Contact>(defaultContact)
    const { comment } = props
    const { contacts } = useContext(PostContext)

    useEffect(() => {
        for (const contact of contacts) {
            if (contact.id === comment.contactId) {
                setCommentAuthor(contact)
            }
        }
    }, [contacts, comment.contactId])

    return (
        <p key={comment.id}>
            {`>${commentAuthor.firstName} ${commentAuthor.lastName}`} {'says:'}{' '}
            {comment.content}
        </p>
    )
}

function AddComment(props: {
    post: Post
    content: string
    setContent: React.Dispatch<SetStateAction<string>>
}) {
    const { post, content, setContent } = props

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newComment: Comment = {
            id: Date.now(),
            contactId: 1,
            content: content,
        }

        let updatedComments: [Comment, ...Comment[]]

        if (post.comments) {
            updatedComments = [newComment, ...post.comments]
        } else {
            updatedComments = [newComment]
        }

        try {
            await axios.put(`${API_POSTS_URL}/${post.id}`, {
                ...post,
                comments: updatedComments,
            })
            setContent('')
            window.location.reload()
        } catch (error) {
            console.error('Error updating the post with new comment:', error)
        }
    }

    return (
        <form className='flex gap-4' onSubmit={(e) => handleSubmit(e)}>
            <input
                type='text'
                className='input w-full'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input
                type='submit'
                className='btn bg-base-300'
                value={'Comment'}
            />
        </form>
    )
}
