# This is the ReadMe file for my project

This react application does the following things:

## Core Requirements

- Once the app loads the initial newsfeed of the user is shown. This newsfeed contains 7 random posts from 6 users fetched from the API
- User number and post number can be changed from the App.js
- The active user can be seen from the top right avatar and is the first user fetched from the users API
- The active user can comment on an existing post and create a new post
- Clicking on a post title loads a new route with that post only

## Extensions

- If a post has more than 3 comments then the "See previous comments" button appears, which collapses all the comments of the post
- If the profile button, the avatar on the top right or avatars/names in posts are clicked then a profile page loads. This contains all the info for the corresponding user and by changing a field and pressing save, the new data is stored and there is a redirection to the newsfeed screen
- Every commenter is supposedly not a user of the app, so there is no profile page for him. Even if the active user comments on something, his comment enters the "unknown users area". Instead of assigning random users to every comment, I just used the email attribute that is inside each comment we fetched from the API, to generate display names for every comment. Unknown users can be distinguished from known users based on color. Known users have green avatars while unknown users have blue avatars
- There is a delete button in every post that deletes the post when clicked
- There is an edit button in every post that has no functionality, but rather alerts the user if he has the rights to edit the post or not

## Component Plan

The component plan does not include some components that were created for extensions
