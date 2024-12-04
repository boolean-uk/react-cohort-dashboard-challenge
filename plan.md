
### State tree
Posts/setPosts
Users/setUsers
LoggedInUser/setLoggedInUser


### Components
Header
Left-Menu
CreatePost
Feed
    Post 
    Home
    PostList (could have added this into feed)
    Comment 
    SpecificPost
Profile


### Styling
Container
Header
Left-Menu
Feed
Profile
Post

### APIs
Users
Posts
Comments

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