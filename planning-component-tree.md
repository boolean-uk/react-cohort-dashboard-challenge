# 0. App (the main component)
  # 1. Header 
  # 2. Sidebar
  # 3. PostsSection (displays posts and comments)
    3a-1. PostList (lists all posts)
      3b. PostItem (individual post)
        3c-1. AuthorCircle (displays the author's initials in a circle)
        3c-2. CommentList (lists comments for the post)
        3d. CommentItem (individual comment)
          3e. AuthorCircle (displays the author's initials in a circle)
        3c-3. NewCommentForm (form to create a new comment)
    3a-2. NewPostForm (form to create a new post) 

  ## Extensions:
  # 4. PostDetails (displays a single post and its comments, accessible by clicking a post's title)
      4a-1. AuthorCircle (displays the author's initials in a circle)
      4a-2. CommentList (lists comments for the post)
        4c. CommentItem (individual comment)
          4d. AuthorCircle (displays the author's initials in a circle)
      4a-3. NewCommentForm (form to create a new comment)
  # 5. ProfilePage (shows the profile of the user)
  # 6. UserProfilePage (shows the profile of the user clicked in a comment or post)