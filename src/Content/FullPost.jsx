import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ContentContext } from "../Helper/Contex"


export default function FullPost(){
    const {id} = useParams()
    const [post, setPost] = useState()
    const url = 'https://boolean-uk-api-server.fly.dev/panfi98/post'


    const getAPost = async (id) => {
        const response = await fetch(url + `/${id}`)
        const data = await response.json()
        setPost(data)    
    }

    useState(() => {
        getAPost(id)
    },[])
    
    useState(() => {
        console.log(post)
    },[setPost])


    return(
        <>
            <p>Post with following id: {id} <br/> Text:{post?.content} </p>
        </>
    )


}