export default function UserIcon(props) {
    const {user} = props
    let name
    if (user === undefined) {
        name = ''
    } else {
        const tmpArr = user.name.split(' ')
        name = tmpArr[0][0]+tmpArr[1][0]
    }
    return (
        <p className="user-icon">
            {name}
        </p>
    )
}