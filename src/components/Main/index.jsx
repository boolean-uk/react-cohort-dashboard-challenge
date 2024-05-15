import { useContext} from 'react'
import Card from './Card'
import { PostsContext } from '../../App'


export default function Main() {

   const {posts} = useContext(PostsContext)

    return (
        <main className="main">
            <Card cardType={'CreatePost'} />

            {posts.sort((a,b) => {return b.id-a.id}).map((e) => {
                
                
                return (
                    <Card
                        key={`post-card-${e.id}`}
                        cardType={'Post'}
                        id={e.id}
                    />
                )
            })}
        </main>
    )
}
