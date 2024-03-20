<App>

    Routes:
        <Route='/' component={Dashboard}/>
            <Route='/post/:postId' component={PostDetails}/>
            <Route='/create-profile' component={CreateProfile}/>

    Components:
        <Dashboard/>
            <PostList/>
                <PostListItem/>
                    <CommentList/>
                        <CommentListItem/>
                    <NewCommentForm/>
            <NewPostForm/>
            <Link to CreateProfile/>
        
        <PostDetails/>
            <PostListItem/>
            <CommentList/>
                <CommentListItem/>
            <NewCommentForm/>
        
        <CreateProfile/>
            <ProfileForm/>
            
</App>
