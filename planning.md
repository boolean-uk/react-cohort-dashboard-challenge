# Planning

## Components

- **Header**
- **LeftMenu**
- **PostsListPage**
- **CreatePostItem**
- **Post**
- **CommmentsList**
- **Comment**
- **CreateCommentItem**
- **PostDetailPage**
- **ProfileIcon**

### Routes

- /posts
- /posts/id

## State models

```json
posts =
  {
    "title": "I bought a new coffee machine",
    "content": "It's the best thing I've ever done!",
    "contactId": 42
  },[]
```

```json
comments =
  {
    "postId": 10,
    "content": "You should get a decaff!",
    "contactId": 13
  },[]
```

## Component tree

### Syntax explanation

- **Component**
- _Route_
- {Props}
- (Comments)
- Navigation -> _route_
- [state, setState]

### Tree

- **App**
  - [ loggedInUser, setLoggedInUser]
  - **Contexts**
    - UserContext [ user ]
  - **HeaderBar** {UserContext}
  - **LeftMenu** [active, setActive]
    - -> _/posts_
    - -> _/profile_ (Extension)
  - **Routes**
    - **PostsListPage** _/posts_ [posts, setPosts]
      - **CreatePost** {UserContext, getPosts}
      - **Post** {postId} [Comments, setComments]
        - -> _/posts/id_
        - **CommmentsList** {postId}
          - **Comment**
          - **CreateComment** {UserContext}
    - **PostDetailPage** _/posts/id_
    - - **Post** {postId} [Comments, setComments]
        - **CommmentsList** {postId}
          - **Comment**
          - **CreateComment** {UserContext}
  - **General Components**
    - **ProfileIcon**
      - (Get the first letter of name/surname)
