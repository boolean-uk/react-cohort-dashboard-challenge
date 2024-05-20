// import { MyContext } from './MyContext'
import { useContext, useState } from 'react'
import { MyContext } from './MyContext'


export default function posts() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { generateRandomColor } = useContext(MyContext)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [myPost, setMyPost] = useState({
        id: '',
        contactId: '',
        tite: '',
        content: ''
    })

    const handleChange =(e) => {
        
        const { name, value } = e.target
        console.log(value)

        setMyPost({
            ...myPost,
            [name]: value
        })
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
            // eslint-disable-next-line react/jsx-key
            <div className="main-header">
                <p className="logged-user" onChange={generateRandomColor}>ML</p>
                <input id="post-input" name='content' type="text" placeholder="What's on your mind" onChange={handleChange}/>
                <button className="post-btn">Post</button>
            </div>
        )

}




