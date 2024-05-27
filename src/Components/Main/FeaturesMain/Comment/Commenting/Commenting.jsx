import { useState, useEffect } from 'react'
import ProfilePicture from '../../../../ProfilePicture'
import PropTypes from 'prop-types'

export default function Commenting({ authorId, body }) {
    const [author , setAuthor] = useState({})
   
   // Using useEffect hook to perform side effects (like data fetching) in function comps
   useEffect(() => {
    // Fetching author data from an API using the provided authorId
    fetch(`https://boolean-api-server.fly.dev/Shaun-Harris/contact/${authorId}`)
    .then(response => response.json()) // Parsing the response as JSON
    .then(json => setAuthor({...json})) // Updating author state with the fetched data
}, [authorId]) // Running the effect only when authorId changes

    return (
        <li className='comment'>
            {author && <ProfilePicture author={author} />}
            <article>
                <h5>{author.fistName + ' ' + author.lastname}</h5>
                <p>{body}</p>
            </article>
        </li>
    )
}

Commenting.propTypes = {
    authorId: PropTypes.number.isRequired,
    body: PropTypes.string
}