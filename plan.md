### State tree
- Posts/setPosts 

### Components
- Header
- Left-Menu
- NewPost
- Post with comment
- Comment

### Styling
- Container
- Header
- Left-Menu
- Top-Menu
- Feed

### Component tree
App
└── PostContext.Provider
    ├── Header
    ├── LeftMenu
    └── Routes
        ├── Route (path="/")
        │   └── Home
        │       ├── CreatePost
        │       └── Post (map over posts)
        │           └── Comment (for each post's comments)
        ├── Route (path="/profile/:id")
        │   └── Profile
        └── Route (path="/post/:id")
            └── PostDetail
                └── Post
                    └── Comment (for post comments)
