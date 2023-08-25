# React Components Diagram

## App View
* App
    * Header
        * HeaderLogo
        * UserBanner
    * LeftMenu
      * MenuItem
        * ItemIcon
    * Main (Dashboard or Profile)


## Dashboard View
* Dashboard
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
            * PostBody
            * CommentsList
                * LoadMoreButton
                * Comment
                    * UserBanner
                    * AuthorName
                    * CommentBody
            * NewCommentForm
                * UserBanner
                * CommentInput
                  * SubmitCommentButton


## Profile View
* Profile
    * ProfileHeader
    * ProfileContent
      * ProfileTitle
          * UserBanner
          * UserFullName
      * ProfileForm
          * FormSection
              * SectionTitle
              * FormFieldsList
                  * FormField
          * SaveButton