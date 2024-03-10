import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../App"
import toast, { Toaster } from 'react-hot-toast';

export default function Post(){    
    const { user, getPosts } = useContext(AppContext)
    const [data, setData] = useState({"title": "", "content": "", "contactId": user ? user.id : undefined}) 

    const handleChange = (event) => {
        const { name, value } = event.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }    
    console.log("user fra post: " + data.contactId)
    const submit = () => {        
        if (!data.contactId){return}
        fetch("https://boolean-api-server.fly.dev/louisshr/post", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })           
        .then(response => {
            if (response.ok){
                toast("Your post was published!")
                setData(prevData => ({
                    ...prevData,
                    title: "",
                    content: ""
                }))
                getPosts()
            }
        })        
        .catch(error => {
            console.log("error: " + error)
        })
    }

    const GetInitals = () => {
        let intials = ""
        const firstName = user.firstName.trim()
        const lastName = user.lastName.trim()
        if (firstName !== "") intials += firstName.charAt(0)
        if (lastName !== "") intials += lastName.charAt(0)
        return intials
    }

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            contactId: user ? user.id : undefined
        }))
    }, [user])
    
    return(
        <div className='create-post-container'>
            <div className='profile-icon-default' style={{backgroundColor: user ? user.favouriteColour : 'black'}}>
                {user && <p className='font-paragraph'>{GetInitals()}</p>}
            </div>

            <div className="post-input-container">                
                <input
                className='main-input font-paragraph' 
                type='text' 
                placeholder='Title'
                name="title"
                onChange={handleChange}
                />
                <input
                className='main-input font-paragraph'
                type='text'
                placeholder='Whats on your mind?' 
                name="content"
                onChange={handleChange}
                />
            </div>      
            <button className='post-button' onClick={submit}>Post</button>
            <Toaster />
        </div>        
    )
}