# Cohort Manager Application Structure

![Cohort Manager Application](Components-v1.png)

- Component `<NavigationMenu>`
- Component `<Header user={user}>`
- Component `<PostsFeed>`

  - `api.GetPosts()` is fetched to render **\<PostItem>** s

  - Component `<CreatePost>`
    - `api.CreatePost()`
  - _several_ Component `<PostItem>`
    - `api.GetPostComments()`

## Component \<PostItem>

A `<PostItem>`contains the following:

Each PostItem has a PostContext which contains `{Post, originalPosterUser, Comments, UpdateComments, UpdatePost }`

API.GetComments()

- `PostItem`
  - Component `<OriginalPost>`
  - Component `<PostCommentList>`
    - `State.ShowAmount(3)` or `ShowAmount(All)`
    - *Contains several *Component `<CommentItem>`
      - API.getUserById()
  - Component `<CreateComment>`
    - `api.PostCommentToPost()`

---

Standalone Reusable component

- Component `<ProfileCircle>`
