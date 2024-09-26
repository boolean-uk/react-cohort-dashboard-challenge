design for path structure
CohortManagerMainPage path "/"
LookAtSpecificPostPage path "/posts/{postId}"
LookAtUserProfilePage path "/users/{userId}"

FOLDERS
Design_and_Prep
a folder containing my design and planning documents.

    components
    A folder containing my applications components

        Comment.jsx
        a file representing a single comment. receives its content from Post.jsx as props.

        immages.jsx
        contains all images from the style-guide. kept as easily imported functions to keep the Pages code tidier.

        Post.jsx
        a file representing a single post. independently gets the comments from the API and maps all comments. Also has the data to be able to make comments on the post. The comment is posted to the API. receives its content from CohortManagerMainPage.jsx as props. The title of the post is a link that redirects to the Specific page for the post.

        I thought it would be fun so whenever you hover your mouse over the "submit button" for the comments, it spins xD

    pages
    a folder containing the different webpages.

        CohortManagerMainPage.jsx
          a file for the main page of the application. It receives its data as context from the App.jsx folder. It maps the data as posts. It has an input where a user can make a post to the API. the new post appears at the top of the posts. simulates a logged in user by deciding on an id and fetching its corresponding user from the API.

        LookAtSpecificPostPage.jsx
        a file that displays a single post and its comments.
        uses useParam function to get id from url path.
        uses id to independently fetch item from API.
        this makes LookAtSpecificPostPage not reliant on being sent lists of posts or users. fetches a single post that is store in an array and maps as a post.jsx object. when it creates the new post, the post fetches its own comments. The page uses one of the sidebar buttons to navigate back to the main page.

        LookAtUserProfilePage
        page ment for the profile of a user. Not yet implemented. will hold the data of a users profile.

App.jsx
fetch API posts and store them in state. send as context to CohortManagerMainPage (path : "/").
Holds the BrowserRouter and all the other routes.

App.css
holds all the styling for my page.

Api.jsx
file that holds and exports all fetch-requests for the app.

API structure
the posts consist of an array of objects.
url to posts: https://boolean-api-server.fly.dev/MackanPalm/post
{
An id for the actual post.
"id": 1,

the id of the one that posted.
"contactId": 3,

the title / header for the post (should probably be bold text in the paga)
"title": "Textor surgo adsidue deinde.",

The written text of the post.
"content": "Textor ait audio beatae aequus universe xiphias. Ubi non ultio adopto atrocitas. Desidero voluntarius confero amet repellendus magnam aggero cavus. Cetera blanditiis arx validus stella adfero communis. Alias clarus deludo contigo corpus."
},

the comments are also an array of objects.
url to post comments: https://boolean-api-server.fly.dev/MackanPalm/post/{postId}/comment (postId is the postId of any individual post)
[
{
they contain an id to conect it to a specific post
"postId": 10,

    content is the text of the actual comment.
    "content": "You should get a decaff!",

    lastly there is the second id that is owned by a user
    "contactId": 13

}
]
