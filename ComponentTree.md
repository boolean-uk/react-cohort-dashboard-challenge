Name: App
Description: Main component rendering the entire application.
User Interaction: Renders different pages/components based on the route.
State: No state needed.
Props: No props passed.
Routes: Routes for HomePage and PostDetails.
Navigation/Reload/Error: Navigates between different pages based on route changes.
HomePage.jsx

Name: HomePage (Page)
Description: Renders the home page of the application with a list of posts.
User Interaction: Allows users to view a list of posts and navigate to individual post details.
State: No state needed.
Props: Receives the list of posts as props.
Routes: No specific route needed (nested under App.jsx).
Navigation/Reload/Error: Navigates to PostDetails when a post is clicked.
PostDetails.jsx

Name: PostDetails (Page)
Description: Renders detailed information about a specific post.
User Interaction: Allows users to view post details, comments, add comments, update post (if authorized), and delete post (if authorized).
State: Manages comment data (new comments, existing comments).
Props: Receives the post details as props.
Routes: Route for viewing individual post details (e.g., /post/:postId).
Navigation/Reload/Error: Navigates back to the home page after deleting a post. May show error messages for failed operations.
PostSummary.jsx

Name: PostSummary (Component)
Description: Renders a summary of a single post within the list on the home page or in the post details page.
User Interaction: Allows users to view post summary, delete post (if authorized), update post (if authorized), add comments to the post.
State: Manages new comment input, visibility of update fields.
Props: Receives post data as props.
Routes: No specific route needed (used within HomePage and PostDetails).
Navigation/Reload/Error: Navigates to PostDetails when the post title or update button is clicked. May show error messages for failed operations.
Profile.jsx

Name: Profile (Page)
Description: Renders user profile information and settings.
User Interaction: Allows users to view and update their profile information.
State: Manages user profile data (e.g., name, email, profile picture).
Props: No props needed (accesses user data from context).
Routes: Route for viewing and editing user profile (e.g., /profile).
Navigation/Reload/Error: May navigate to other pages within the app (e.g., homepage). May show error messages for failed operations.
UpdateCommentForm.jsx

Name: UpdateCommentForm (Component)
Description: Renders a form for updating a comment.
User Interaction: Allows users to edit and update their comments.
State: Manages the content of the comment being edited.
Props: Receives the comment data as props.
Routes: No specific route needed (used within PostDetails).
Navigation/Reload/Error: No navigation or reload actions. May show error messages for failed operations.
