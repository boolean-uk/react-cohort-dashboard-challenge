# React Components Diagram

## App View
* App
    * Header
        * Logo
        * UserBanner
    * LeftMenu
      * MenuItem
          * Icon
          * Option
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