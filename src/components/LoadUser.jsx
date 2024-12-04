import { useContext } from "react"
import { InstanceContext } from "../App"

export default function LoadUser(userID) {
    const _userRes = localStorage.getItem("user_" + userID)
    var _user = null

    if (_userRes !== null || _userRes !== undefined)
        _user = JSON.parse(_userRes)

    // in order to access useContext, this function needs to be a react component
    // and the one way i know how is to return html elements
    // thus you see the cursed code below
    const _instance = useContext(InstanceContext)

    if (_user === null) {
        _user = {}
        fetch(_instance.baseURL + "contact/" + userID)
        .then((res) => res.json())
        .then((res) => _user = res)
        .finally(() => {
            if (_user === null || _user === undefined) return
            localStorage.setItem("user_" + userID, JSON.stringify(_user))
        })
    }

    return (
        <result name={_user}></result>
    ).props.name
}
