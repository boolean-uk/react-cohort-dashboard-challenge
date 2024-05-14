import { useEffect, useState } from 'react'
import Card from './Card'

export default function Main() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/angustownsley/post')
            .then((response) => response.json())
            .then((json) => setPosts([...json]))
    }, [])

    return (
        <main className="main">
            <Card cardType={'CreatePost'} />

            {posts.map((e, index) => {
                return (
                    <Card
                        key={index}
                        cardType={'Post'}
                        title={e.title}
                        body={e.content}
                        authorId={e.contactId}
                        id={e.id}
                    />
                )
            })}
        </main>
    )
}
