import UserIcon from "../../components/UserIcon";

export default function Comment(props) {
    const {comment} = props
    //Extract Comment Author Name from Email Attribute since Comment has no Author Name Attribute
    const email = comment.email.split('@')
    let author = email[0].replace('_',' ').replace('.',' ')
    const authorBonus = email[1].slice(0,1).toUpperCase() + email[1].slice(1,email[1].indexOf('.'))
    author += ' ' + authorBonus

    return (
        <li className="comment-body">
            <UserIcon user={ {name: author} }/>
            <div className="comment-info">
                <p className="comment-author">{author}</p>
                <p className="comment-msg">{comment.body}</p>
            </div>
        </li>
    )
}