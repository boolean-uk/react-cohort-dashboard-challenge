import { contactURL, get } from "../client"
import { useState } from "react"


export default function ProfileLogo() {

    const [initials, setInitials] = useState("")

    get(`${contactURL}/${"1"}`)
                .then((data) => {
                    const firstLetter = data.firstName[0]
                    const lastLetter = data.lastName[0]
                    setInitials(firstLetter+lastLetter)
                })

    return (
        <div className="profileLogo">{initials}</div>
    )
}
