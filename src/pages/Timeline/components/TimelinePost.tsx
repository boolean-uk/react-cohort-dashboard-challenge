import { useContext, useEffect, useState } from 'react'
import { Contact, Post, PostContext } from '../../../App'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import { defaultContact } from '../defaultContact'

export default function TimelinePost(props: { post: Post }) {
    const [author, setAuthor] = useState<Contact>(defaultContact)
    const { contacts } = useContext(PostContext)

    useEffect(() => {
        for (const contact of contacts) {
            if (contact.id === props.post.contactId) {
                setAuthor(contact)
            }
        }
    }, [contacts, props.post.contactId])

    return (
        <div className='card bg-base-200 min-w-full p-4'>
            <Link
                to={`/profile/${author.id}`}
                className='card-title link-hover flex gap-4 pl-8 pt-8'
            >
                <img
                    src={author.profileImage ?? defaultContact.profileImage}
                    alt={`${author.firstName}'s profile photo`}
                    className='h-8 rounded-full'
                />
                <h1>
                    {author.firstName} {author.lastName}
                </h1>
            </Link>
            <div className='card-body gap-6'>
                <div className='flex flex-col gap-2'>
                    <span className='card-title'>{props.post.title}</span>
                    <span>{props.post.content}</span>
                </div>
                <Comments post={props.post} />
            </div>
        </div>
    )
}
