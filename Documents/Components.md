# App
Parent component to Dashboard (Home or UserProfile), Header and LeftMenu. 

## Dashboard
This is the route that sends the user to the Home component (default) with the URL: `/`, or the UserProfile component with the URL: `/profile/:id`

## UserProfile
Component where user gets an overview of the currently logged in user
Includes inputs containing:
* Account info (First name, Last Name, Username and Email)
* Address (Street, Suite, City, Zipcode)
* Contact Info (Phone number, Website)
* Company Info (Name, Catchphrase(?), Business Statement)

## Home
This is where the user views all posts. The home component calls the API to recieve posts and their comments, stores them as a state, and inserts them into the ContextAPI for child components to call.
All posts are displayed as `PostList` items.
The user can also access the `CreatePost` component.
### CreatePost
Recieves User from `App.jsx` through ContextApi

### PostList
Displays a list of posts fetched from the API and stored in the ContextAPI by the Home component. Each post is represented by a PostItem component. The list is updated dynamically when a new post is created. Clicking on a post's title or content will navigate the user to the corresponding PostView.

### PostItem
Represents an individual post in the PostList. Displays the author's initials in a colored circle, post title, and content. Users can click on the post title to navigate to the detailed view of that post and its comments. The CreateComment component is also accessible from here.

## PostView
Displays the detailed view of a specific post along with its comments. Accessed by clicking on a post title in the PostList. Shows the author's initials in a colored circle, post title, content, and a list of comments. Users can create new comments using the CreateComment component.

### CreateComment
Allows users to create new comments on posts. Receives the user information from App.jsx through the ContextAPI. When a new comment is created, it is added to the list of comments for the specific post. The initials of the comment author are displayed in a colored circle.

### CommentList
Displays a list of comments for a specific post in the PostView. Each comment is represented by a CommentItem component. Users can view and create comments here.

### CommentItem
Represents an individual comment in the CommentList. Displays the author's initials in a colored circle and the comment content. Clicking on the author's initials could lead to the user's profile or additional details. The CreateComment component is also accessible from here.

With this component tree, users can navigate through the app, create new posts, comment on existing posts, and view detailed information about specific posts and their comments. The colored circles with initials provide a visual identifier for authors, enhancing the user experience.