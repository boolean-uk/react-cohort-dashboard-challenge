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
                        <div><p>firstName lastName</p><p>title</p></div>
                    </div>
                    <div className="post-content">paragraph</div>
                    <div className="comment-section">
                        <p className="logged-user">ML</p>
                        <div>
                            <input id="post-input" type="text" value='' placeholder="Add a comment..." />
                            <button className="post-btn">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#e8eaed"
                                >
                                    <path 
                                        d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
            </div>
        </main>
    )

}