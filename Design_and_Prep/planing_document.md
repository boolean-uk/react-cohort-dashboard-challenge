design for path structure
CohortManagerMainPage path "/"
LookAtSpecificPostPage path "/posts/{postId}"
LookAtUserProfilePage path "/users/{userId}"

App
fetch api posts and store them in state. send as context to CohortManagerMainPage (path : "/").
Holds the BrowserRouter and all the other routes.

CohortManagerMainPage
Displays a list of PostElements. Provide individual postData in to the PostElement as props.

PostElement
Resives information from CohortManagerMainPage as props. uses the data to display the comment.
Has a text field to write a new comment.

LookAtSpecificPostPage
uses useParam function to get id from url path.
uses id to fetch item from API.
this makes LookAtSpecificPostPage and LookAtUserProfilePage not relient on being sent lists of posts or users.

LookAtUserProfilePage

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
