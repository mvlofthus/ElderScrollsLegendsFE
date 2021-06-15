# Elder Scrolls Legends Cards 
A clean, responsive UI to display and search for cards from the [Elder Scrolls Legends API](https://docs.elderscrollslegends.io/#api_v1cards_list).

## Prerequisites
Make sure you have installed the following on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* Yarn - You're going to use the [Yarn Package Manager](https://classic.yarnpkg.com/en/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install yarn globally using npm:

```bash
$ npm install --global yarn
```
* _Alternative_: if you have Homebrew installed, you can use the command below to install yarn.  Per the yarn documentation, this will also install Node.js if it is not already installed. (Please refer to yarn's [documentation](https://classic.yarnpkg.com/en/) for details).  
```bash
$ brew install yarn
```

## Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Create app: 
```bash
$ yarn create react-app <app-name>
```

## Installation
To style, install [Bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/): 
```bash
yarn add react-bootstrap bootstrap@4.6.0
```

To make API calls, install axios ([axios documentation](https://github.com/axios/axios)): 
```bash
yarn add axios
```


## Application Setup / Build
The following were requirements we set out to meet, re-ordered to match the order in which we implemented them:
* Show results in a card grid format with the image prominently displayed.
* Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
* Use a responsive design that accommodates, at minimum, desktop and mobile.
* Initially, fetch and display the first 20 results returned by the API.
* Allow the user to search for cards by Name.
* Display a loading indicator when communicating with the API.
* As the user scrolls down the page, load and append additional cards using “infinite scroll.”
* Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.


## Available Yarn Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
