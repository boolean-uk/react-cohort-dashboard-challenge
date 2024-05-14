/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom'
import CreatePost from './CreatePost'
import Post from './Post'

export default function Card({cardType, id}) {
    const urlParams = useParams()
    
    function cardCheck() {
        switch (cardType) {
            case urlParams :
                return <Post id={urlParams.id}/>
            case 'CreatePost':
                return <CreatePost />
            case 'Post':
                return <Post id={id}/>
        }
    }

    return <div className="card">{cardCheck()}</div>
}
