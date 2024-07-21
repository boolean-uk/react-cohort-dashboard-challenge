import { useParams } from 'react-router-dom'
import { Contact, PostContext } from '../../App'
import { useContext, useEffect, useState } from 'react'
import PostList from './components/PostList'

export default function Profile() {
    const [contact, setContact] = useState<Contact>()
    const { contacts } = useContext(PostContext)
    const { id } = useParams()

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find(
                (contact: Contact) => contact.id === parseInt(id)
            )
            setContact(matchingContact)
        }
    }, [contacts, id])

    if (!contact || id === undefined)
        return (
            <div className='flex flex-col'>
                <h1 className='card-title'>Error Occured</h1>
                <p className='text-sm'>Could not find user with id: {id}</p>
            </div>
        )

    return (
        <div className='flex flex-col gap-8'>
            <div className='card bg-base-200 min-w-full p-4'>
                <div
                    className='card-title flex gap-4 pl-8'
                >
                    <img
                        src={contact.profileImage}
                        alt={`${contact.firstName}'s profile photo`}
                        className='h-8 rounded-full'
                    />
                    <h1>
                        {contact.firstName} {contact.lastName}
                    </h1>
                </div>
            </div>
            <PostList id={id} />
        </div>
    )
}
