# Plan

## Goals

1. Make this page:
   ![finished main page](../_assets/dashboard.png)
2. And this page:
   ![finished profile page](../_assets/profile.png)
## Components

- [ ] `<App />`
	- [x] `<Header />`
		- [x] `<WebsiteTitle />`
		- [x] `<UserIcon />`
	- [x] `<SideMenu />`
		- [ ] `SIDE_MENU_ITEMS.map()` => `<SideMenuItem />`
	- [ ] `<Routes />`
		- [x] `<Route />` => `<Home />`
			- [ ] `<NewPost />`
				- [ ] `<UserIcon />`
				- [ ] `<NewPostForm />`
					- [ ] `<TextInput />`
					- [ ] `<SubmitButton />`
			- [x] `<PostFeed />`
				- [x] `feed.map()` => `<PostItem />`
					- [x] `<PostHeader />`
						- [x] `<UserIcon />`
						- [x] `<UserName />`
						- [x] `<PostTitle />`
					- [x] `<PostBody />`
					- [x] `<PostCommentFeed />`
						- [ ] `<PreviousComments />`
						- [ ] `postCommentFeed.map()` => `<Comment />`
							- [x] `<UserIcon />`
							- [ ] `<CommentBody />`
								- [x] `<UserName />`
								- [ ] `<CommentContent />`
						- [ ] `<NewComment />`
							- [x] `<UserIcon />`
							- [ ] `<NewCommentForm />`
								- [ ] `<TextInput />`
									- [ ] `<NewCommentButton />`
		- [ ] `<Route />` =>  `<Profile />`
			- [ ] `<h2 />`
			- [ ] `<ProfileForm />`
				- [ ] `<ProfileTitle />`
					- [ ] `<UserIcon />`
					- [ ] `<UserName />`
				- [ ] `PROFILE_FORM_TEMPLATE.map()` => `<ProfileFormSection />`
					- [ ] `<ProfileFormSectionTitle />`
					- [ ] `PROFILE_FORM_TEMPLATE.section.fields.map()` => `<ProfileFormField />`
						- [ ] `<ProfileFormFieldTitle />`
						- [ ] `<TextInput />`
					- [ ] `<SubmitButton />`
		- [ ] `<Route />` => `<PostSingle />`
			- [x] `<PostItem />`
			- [x] ... All components in `<PostItem />`
## State

- [ ] `<App />`
	- [x] `const loggedInUser: number = 1`
	- [ ] `const activePage: string = "Home"`
- [ ] `<NewPostForm />`
	- [ ] `const text: string = "blah blah blah"`
- [x] `<PostFeed />`
	- [x] `const feed: array = [{}, {}, ...]`
- [ ] `<PostItem />`
	- [ ] `const postId: number = 1`
	- [ ] `const edited: boolean = false`
	- [ ] `const belongsToLoggedUser: boolean = true`
	- [ ] `const commentFeed: array = []`
	- [ ] `const bigCommentFeed: boolean = false`
	- [ ] `const showAllComments: boolean = true`
- [ ] `<Comment />` 
	- [ ] `const commentId: number = 1`
	- [ ] `const belongsToLoggedUser: boolean = true`
	- [ ] `const deleted: boolean = false`
	- [ ] `const edited: boolean = false`
- [ ] `<NewCommentForm />`
	- [ ] `const text: string = "blah blah blah"`
- [ ] `<Profile />`
	- [ ] `const userId: number = 1`
	- [ ] `const isLoggedInUser: boolean = true`
	- [ ] 