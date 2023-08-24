# React Cohort Dashboard Challenge

## Learning Objectives
- Use ReactJS to build an implementation of a provided application design
- Use HTTP requests to interact with a RESTful API
- Use routing to allow navigation between pages in a React app

In this challenge, you'll create a social media style post feed. There is no boilerplate code provided - you'll be building this from scratch using the designs and specifications provided.

## Instructions

Fork and clone this repository to your machine.

[Implement this design](./_assets/dashboard.png) using, as a minimum, the below listed technologies. Note: you may need to open the file directly on your machine to view it properly.

- ReactJS
- React Router DOM version 6.4 or above
- A RESTful API

[Use this REST API](https://jsonplaceholder.typicode.com/) as your data source. In particular, you'll need the `/posts`, `/comments` and `/users` routes provided. Each of these routes has GET, POST, PUT and DELETE methods available. Scroll down to the Resources and Routes sections to see example usage.

You can use the command `npx create-react-app .` to create a new React application in the root directory of this project.

## Core Requirements

- Everything that *can* be its own component, *should* be its own component. You **must** provide evidence of planning what components you are going to create - this could be a component tree diagram, a bullet point list, a wireframe, whatever you like. Include your plan as a file in this repository.
- Users should be able to create a new post. The new post should be displayed at the top of the post feed.
- Users should be able to comment on existing posts.
- Posts and comments should show the initials of the author in a coloured circle.
- Clicking a posts title (under the author name) should take the user to a separate route that shows only that post and all of its comments. You **must** use a route for this, not an array filter.
- You must use [this style guide](./STYLE_GUIDE.md) to implement the colour scheme.
- The layout does not need to be mobile responsive, nor does it need to be pixel perfect. Get as close as you can, but your main focus should be on React - not CSS.

## Extension Requirements

- Only 3 comments should be visible on a post; if a post has more than 3 comments, the `See previous comments` link should expand the list of comments to display all of them.
- Clicking on a post / comment authors name or initials, the user initials in the top right of the app, or the `Profile` link in the left navigation menu should take the user to [this Profile screen](./_assets/profile.png).
    - Use the user with an ID of 1 as the currently logged in user. This is the user you should use when clicking the top right initials or the Profile menu item directly.
    - The fields should be automatically populated with the correct data when loading any user profile.
- You should be able to update all of the users information.
- Posts and comments should be able to be updated and deleted.

## Advice

Break this project down into smaller, individual tasks. You could use a simple todo list, a project management board like Trello, anything you like. Not only will this reduce overwhelm and provide you with a clear path forward, it'll also ensure you have understood and accounted for every requirement.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)