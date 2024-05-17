import { useContext, useEffect} from 'react'
import Card from './Card'
import { NavContext, PostsContext } from '../../App'


export default function Main() {

   const {posts} = useContext(PostsContext)

   const {setNavActive} = useContext(NavContext)

   useEffect(() => {
    setNavActive("home")
   })

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
