/* eslint-disable react/prop-types */
import CreatePost from './CreatePost'
import Post from './Post'

export default function Card({ cardType }) {
    function cardCheck() {
        switch (cardType) {
            case 'CreatePost':
                return <CreatePost />
            case 'Post':
                return <Post />
        }
    }

    return <div className="card">{cardCheck()}</div>
}
