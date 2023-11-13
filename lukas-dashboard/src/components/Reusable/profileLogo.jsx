import { contactURL, get } from "../client"
import { useEffect, useState } from "react"


export default function ProfileLogo() {

    const [initials, setInitials] = useState("")

    useEffect(() => {
        get(`${contactURL}/${"1"}`)
            .then((data) => {
                const firstLetter = data.firstName[0]
                const lastLetter = data.lastName[0]
                setInitials(firstLetter + lastLetter)
            })
    }, [initials])

    return (
        <div className="profileLogo">
            <strong>{initials}</strong>
        </div>
    )
}
