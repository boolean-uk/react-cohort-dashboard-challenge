import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Profile () {
    const [userToUpdate, setUserToUpdate] = useState ({})
    const userID = useParams().id

    // useEffect(() => {
    //     getUser()
    // })

    // const getUser = async () => {
    //     const data = await fetch(`https://boolean-uk-api-server.fly.dev/MrStashy/contact/${userID}`)
    //     const json = await data.json()
    //     setUserToUpdate(json)
    // }

    return (
        <form className="m-5 flex flex-col gap-3 bg-white rounded-md p-3">
        <h2 className='font-bold place-self-center text-cohortBlue'>Update User Profile</h2>
        <label htmlFor='firstName'>First Name:</label>
        <input name='firstName' placeholder="tits" className="border-2"/>
        </form>
    )
}