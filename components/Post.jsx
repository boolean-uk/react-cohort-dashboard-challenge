// import { MyContext } from './MyContext'
import { useContext, useState } from 'react'
import { MyContext } from './MyContext'


export default function posts() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { generateRandomColor, contactDetail, posts } = useContext(MyContext)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [myPost, setMyPost] = useState({
        id: posts.length + 1,
        contactId: contactDetail[0].id,
        title: 'My post',
        content: ''
    })

    const handleChange =(e) => {
        
        const { name, value } = e.target

        setMyPost({
            ...myPost,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (myPost.content !== '') {
            fetch('https://boolean-api-server.fly.dev/homonoviscoding/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(myPost),
            })
                .then((response) => response.json())
                .then((data) => {
                console.log("Form submitted successfully", data)
            })
            return
        }

        setMyPost({
            id: '',
            contactId: '',
            title: '',
            content: ''
        })
    }


    return (
            <form className="main-header" onSubmit={handleSubmit}>
                <p className="logged-user" onChange={generateRandomColor}>{contactDetail[0].firstName.charAt(0)}{contactDetail[0].lastName.charAt(0)}</p>
                <input id="post-input" name='content' type="text" placeholder="What's on your mind" value={myPost.content} onChange={handleChange}/>
                <button className="post-btn" type='submit'>Post</button>
            </form>
        )

}




