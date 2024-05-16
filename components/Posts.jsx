export default function posts() {

    return (
        <main>
            <div className="main-header">
                <p className="logged-user">ML</p>
                <input id="post-input" type="text" value='' placeholder="What's on your mind" />
                <button className="post-btn">Post</button>
            </div>
            <div className="posts">
                <li className="list-posts">
                    <div className="post-publisher">
                        <div className="user">SF</div>
                        <div><p>firstName lastName</p><p className="post-title">title</p></div>
                    </div>
                    <div className="post-content">paragraph</div>
                    <div className="comment-section">
                        <p className="logged-user">ML</p>
                        <div className="comment-input">
                            <input id="input-comment" type="text" name='comment' value='' placeholder="Add a comment..." />
                            <button className="material-symbols-outlined">send</button>    
                        </div>
                    </div>
                </li>
            </div>
        </main>
    )

}