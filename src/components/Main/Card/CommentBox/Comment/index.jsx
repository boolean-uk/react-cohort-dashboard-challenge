import { useState, useEffect } from 'react'
import ProfileImage from '../../../../ProfileImage'

export default function Comment({ authorId, body }) {
    const [author, setAuthor] = useState({})

    
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/angustownsley/contact/${authorId}`)
        .then(response => response.json())
        .then(json => setAuthor({...json}))
    }, [])

    return (
        <li className="comment">
            <ProfileImage author={author} />
            <article>
                <h5>{author.firstName + ' ' + author.lastName}</h5>
                <p>{body}</p>
            </article>
        </li>
    )
}
