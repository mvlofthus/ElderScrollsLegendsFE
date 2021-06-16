# Elder Scrolls Legends Cards 
A clean, responsive UI to display and search for cards from the [Elder Scrolls Legends API](https://docs.elderscrollslegends.io/#api_v1cards_list).

## Prerequisites
Make sure you have installed the following on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). 
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* Visual Studio Code (or other code editor of choice) - [Download & Install VS Code](https://code.visualstudio.com/download)
* Yarn - You're going to use the [Yarn Package Manager](https://classic.yarnpkg.com/en/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install yarn globally using npm:
```bash
$ npm install --global yarn
```
* _Alternative_: if you have Homebrew installed, you can use the command below to install yarn.  Per the yarn documentation, this will also install Node.js if it is not already installed. (Please refer to yarn's [documentation](https://classic.yarnpkg.com/en/) for details).  
```bash
$ brew install yarn
```

## Application Build
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Create app: 
```bash
$ yarn create react-app <app-name>
```

## Application Setup
Open project in code editor of choice (command for VSCode on second line) and start development server.

```bash
$ cd <app-name>
$ code .
$ yarn start
```

## Installation
To style, install [Bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/): 
```bash
yarn add react-bootstrap bootstrap@4.6.0
```

To make API calls, install [Axios](https://github.com/axios/axios): 
```bash
yarn add axios
```


## Description
### Goals
The following were requirements we set out to meet, organized by the primary way we accomplished these goals.

Achieved with Bootstrap:
* Show results in a card grid format with the image prominently displayed.
* Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
* Use a responsive design that accommodates, at minimum, desktop and mobile.

Achieved with Axios and [React Hooks](https://reactjs.org/docs/hooks-reference.html):
* Initially, fetch and display the first 20 results returned by the API.
* Allow the user to search for cards by Name.
* Display a loading indicator when communicating with the API.
* As the user scrolls down the page, load and append additional cards using “infinite scroll.”
* Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.

### Files
This project uses 5 main files:
* App.js - houses our watchers for our infinite scroll and search handler function, and passes list of cards to Deck.  Alerts user to whether cards are loading, no cards are found under that search term, or there was an error. 
* CardList.js - performs our API calls, and updates and returns our list of cards to App
* Navigation - houses our search bar for user queries and logo, and uses a callback function to update both our query and page number in App
* Deck - formats our cards into a grid, uses a callback function to alert App when more cards need to be loaded, and passes card information to ESLCard
* ESLCard.js - formats each of our individual Elder Scrolls Legends cards

## Images
Sourced from Elder Scrolls Legends site: https://legends.bethesda.net/en/media

 - - -

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
