# Component Tree
### Syntax
Indentation determines which components are parents/children
"-" : Prop
"=" : State
"ctx" : Context
"ctx ->" : Takes Context
"-> ctx" : Is part of Context


### Components

App.jsx
=currentUser -> ctx
=users -> ctx
=posts -> ctx
ctx AppDataContext

  Header.jsx

    ProfilePicture.jsx
    -user

  ContainerMainNav.jsx

    LeftNav.jsx

      NavElement.jsx
      -navigatesToPath
      -iconPath
      -name

    MainHome.jsx

      MakePost.jsx
        -user
        ProfilePicture.jsx



      Posts.jsx

        Post.jsx

          PostHead.jsx

          PostContent.jsx

          PostComments.jsx

            PostComment.jsx

              ProfilePicture.jsx
              -user

              CommentContent.jsx

            MakePostComment.jsx




