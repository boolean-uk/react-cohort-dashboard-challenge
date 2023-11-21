export default function Pfp({ userInfo }) {
    if (!userInfo) {
        return <p>pfp</p>
    }
    const initials = `${userInfo.firstName[0]}${userInfo.lastName[0]}`
    
    return (
        <>
        <div className="pfp">
            <p className="initials">{initials}</p>
        </div>
        </>
    )
}

