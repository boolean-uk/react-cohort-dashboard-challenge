quick n ez overview of component structure

Layout:
{
    topMenu

    leftMenu

    and the routes as props.children
}

route "/"
PostPage:
{
    PostCreate

    Posts
}

Posts:
{
    postsdata.map(Post)
}

Post:
{
    Comments

    CommentCreate
}

Comments:
{
    CommentsData.map(Comment)
}

route "/detail/:id"
PostDetail:
{
    Comments

    CommentCreate
}
