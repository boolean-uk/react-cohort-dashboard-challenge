import { useContext, useState } from 'react'
import { API_POSTS_URL, Post, PostContext } from '../../../App'
import Input from './Input'
import axios from 'axios'

export default function AddPostForm() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const { setIsEditing, posts } = useContext(PostContext)

    const handleSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault()
        axios.post<Post>(API_POSTS_URL, {
            id: posts.length + 1,
            contactId: 1,
            title: title,
            content: content,
        })
            .then((res) => console.log(res.data))
            .then(() => setIsEditing(false))
    }

    return (
        <div className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center pl-24 pt-24 backdrop-blur-sm'>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className='card bg-base-300 w-96 gap-8 rounded-2xl p-4'
                style={{
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                }}
            >
                <div className='flex justify-between'>
                    <h1 className='card-title'>Add a new post</h1>
                    <button
                        className='btn rounded-full'
                        onClick={() => setIsEditing(false)}
                    >
                        X
                    </button>
                </div>
                <Input
                    label='title'
                    type='text'
                    inputChange={(e) => setTitle(e.target.value)}
                    inputValue={title}
                />
                <Input
                    label='content'
                    type='textarea'
                    inputChange={(e) => setContent(e.target.value)}
                    inputValue={content}
                />
                <input type='submit' className='btn' />
            </form>
        </div >
    )
}
