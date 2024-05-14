import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function Profile () {
    const userID = useParams().id


    useEffect(() => {
        getUser()
    })

    const getUser = async () => {
        const data = await fetch(`https://boolean-api-server.fly.dev/MrStashy/contact/${userID}`)
        const json = await data.json()
        console.log(json)
    }

    return (
        <p>This is where profile updates will go</p>
    )
}