# TODO APP With API Authentication


![N|Solid](https://f.hubspotusercontent40.net/hub/2978594/hubfs/vfairs_logo%20(1).png?width=108&height=108)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Backend Laravel Implementation for APIs
I will be using laravel as backend server for api creations and integrations.  I will be creating the RESTful APIs for the Todo App using Laravel 8 Passport. 
Basic requirements to run are:
- PHP >= 7.3
- MySQL (version > 5)
- Apache/Nginx Server
- PHP Storm Editor
- Composer
- Postman

## Features
API's for below features are made:
- Register
- Login
- User Detail
- Logout
- Create Todo
- Todos Listing
- Show Todo
- Update and
- Delete Todo
- 
## Client Side React 

Here, I used the passport token for the user authentication. The logged user can only create, list, edit, and delete only their own todo. So, in every case, we need the token. The token will identify the logged user and on the basis of that token, the user will be able to perform a certain action. These are the overall functionalities in this React todo app using REST API.

In order to create an attractive design, we will add Bootstrap and Reactstrap inside our project. So to do that, you will have to install this using the below command.

```sh
npm install bootstrap reactstrap
```
The componenets which are created are :

- Header.js– The header component is just for showing the title of the app. Also, it will be showing the logout option on the right side. But, the logout option will be visible only when the user is logged in.
- Registration.js– This will be used for user registration.
- Login.js– The user login functionality will be managed here.
- InputItem.js– This component will be used for taking inputs of todo.
- TodoItem.js– It will show the todo item.
- TodoList.js– Here all the todos will be showing.
- EditTodo.js– This is for editing the todo.



### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
