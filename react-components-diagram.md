# React Components Diagram

## App View
* App
    * Header
        * Logo
        * UserBanner
    * View (Dashboard or Profile)

## Dashboard View
* Dashboard
    * LeftMenu
        * MenuItem
            * Icon
            * Option
    * Main
        * NewPostForm
            * UserBanner
            * PostInput
            * SubmitPostButton
        * PostFeed
            * Post
                * PostHeader
                    * UserBanner
                    * AuthorName
                    * PostTitle
                * PostContent
                * CommentsList
                    * LoadMoreButton
                    * Comment
                        * UserBanner
                        * AuthorName
                        * CommentContent
                * NewCommentForm
                    * UserBanner
                    * CommentInput
                    * SubmitCommentButton

## Profile View