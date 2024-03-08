# Component Tree

- App
  - NavigationBar
    - HomeButton
    - ProfileButton
  - Dashboard
    - Route: /
      - HomePage
        - PostForm
          - PostContent
        - PostList
          - Post
            - PostHeader
            - PostContent
            - CommentForm
            - CommentList
              - Comment
    - Route: /profile
      - ProfilePage
        - AccountInfoForm
        - AddressInfoForm
        - ContactInfoForm
        - CompanyInfoForm
    - Route: /{username}/posts/:postId
      - PostDetailsPage
        - PostDetails
          - PostHeader
          - PostContent
          - CommentList
            - Comment

# Core Requirements

- Everything that can be its own component, should be its own component. You must provide evidence of planning what components you are going to create - this could be a component tree diagram, a bullet point list, a wireframe, whatever you like. Include your plan as a file in this repository.

- Posts and comments should show the initials of the author in a coloured circle.
- Clicking a posts title (under the author name) should take the user to a separate route that shows only that post and all of its comments. You must use a route for this, not an array filter.
-You must use this style guide to implement the colour scheme.
-The layout does not need to be mobile responsive, nor does it need to be pixel perfect. Get as close as you can, but your main focus should be on React - not CSS.

## Done:
- Users should be able to create a new post. The new post should be displayed at the top of the post feed.
- Users should be able to comment on existing posts.