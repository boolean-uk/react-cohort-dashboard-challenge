# Component tree

- App (root)

  - HomePage
    Route: /
    Explanation: Where the user can see all of the posts and comments

    - PostPosts
      Explanation: Handles the posting of the posts
      - PostItem
        Explanation: Renders for every post
    - PostComments
      Explanation: Handles the posting of the comments

  - ViewPostPage
    Route: /post/:id
    Explanation: Where the user can see the post
