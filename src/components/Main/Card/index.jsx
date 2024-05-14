/* eslint-disable react/prop-types */
import CreatePost from './CreatePost'
import Post from './Post'

export default function Card(props) {
    function cardCheck() {
        switch (props.cardType) {
            case 'CreatePost':
                return <CreatePost />
            case 'Post':
                return <Post props={props}/>
        }
    }

    return <div className="card">{cardCheck()}</div>
}
