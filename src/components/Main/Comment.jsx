export default function Comment(props){
    const {firstName, lastName, content, favouriteColour} = props.comment
    return(
        <div className='post-comment'>
            <div className='profile-icon-default' style={{backgroundColor: favouriteColour}}>
                <p className='font-paragraph'>{`${firstName.charAt(0)}${lastName.charAt(0)}`}</p>
            </div>
            <div className='comment-bubble'>
                <div className='comment-text-container font-paragraph'>
                <p><b>{`${firstName} ${lastName}`}</b></p>
                <p className="font-paragraph">{content}</p>
                </div>
            </div>                    
        </div>
    )
}