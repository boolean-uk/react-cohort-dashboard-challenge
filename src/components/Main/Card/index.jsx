/* eslint-disable react/prop-types */
import CreatePost from './CreatePost'
import Post from './Post'

export default function Card({cardType, id}) {



    function cardCheck() {
        switch (cardType) {
            case 'CreatePost':
                return <CreatePost />
            case 'Post':
                return <Post id={id}/>
        }
    }

    return <div className="card">{cardCheck()}</div>
}
