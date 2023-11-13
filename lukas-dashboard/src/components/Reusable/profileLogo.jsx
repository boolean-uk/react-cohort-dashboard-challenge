/* eslint-disable react/prop-types */
import { contactURL, get } from "../client"
import { useEffect, useState } from "react"


export default function ProfileLogo({id}) {

    const [initials, setInitials] = useState("")

    useEffect(() => {
        get(`${contactURL}/${id}`)
            .then((data) => {
                const firstLetter = data.firstName[0]
                const lastLetter = data.lastName[0]
                setInitials(firstLetter + lastLetter)
            })
    }, [])

    return (
        <div className="profileLogo">
            <strong>{initials}</strong>
        </div>
    )
}


