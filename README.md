# Auth and Privileges - Mock Office Furniture Business Platform

## Application Description
We created a web application that integrates basic security protocols such as authentication, authorization, and user privileges. The application is essentially a simple business application for a business that produces and sells office furniture. The user roles and privileges are setup like so:

| Role | Dashboard Privileges | Product Privileges | Additional Notes |
| --- | --- | --- | --- |
| Admin | Manage all users | Manage both price and quanity | n/a |
| Production Manager | Manage Production Employees | Manage quanity | n/a |
| Production Employee | n/a | View only | n/a |
| Sales Manager | Manage Sales Employees | Manage price | n/a |
| Sales Employee | n/a | View only | n/a |
| User | n/a | View only | Default role on sign up, needs confirmation for role and salary from an Admin |


## What's Being Used?
### Technology Stack - MERN
* M - [MongoDB](https://www.mongodb.com/), a general purpose, document-based, distributed database.
  * [Mongoose](https://mongoosejs.com/) for elegant mongodb object modeling for Node.js.
  
* E - [ExpressJS](https://expressjs.com/), a minimal and flexible Node.js web application framework for creating robust APIs.

* R - [React](https://reactjs.org/), a JavaScript library for building user interfaces.
  * [reactstrap](https://reactstrap.github.io/) for the component library.
  * [react-router](https://reacttraining.com/react-router/) for routing.
  * [redux](https://redux.js.org/) for managing global state.
  * [react-redux](https://react-redux.js.org/) for official React bindings in Redux.
  * [redux-thunk](https://www.npmjs.com/package/redux-thunk) for Thunk middleware in Redux.
  * [axios](https://www.npmjs.com/package/axios) for sending asynchronous HTTP requests to API endpoints and perform CRUD operations.
  
* N - [Node.js](https://nodejs.org/), an asynchronous event-driven JavaScript runtime designed to build scalable network applications.
  * [jsonwebtokens](https://www.npmjs.com/package/jsonwebtoken) for implementing JSON Web Tokens.
  * [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords.

## Getting Started
In order to get started developing, you'll need to do a few things first.

1. Clone this repository and cd into the repository's directory
```
git clone https://github.com/msichterman/auth-and-privileges.git && cd ./auth-and-privileges
```

2. Install all of the `node_modules` required for the project. Depending on your computer's configuration, you may need to prefix this command with a `sudo`.
```
npm install && npm run client-install
```
or
```
sudo npm install && npm run client-install
```

3. Lastly, run the following command to get the project off the ground. This command will not only build your JS files, but it will also auto-compile your files on every file save. This allows for hot reloading on-save when the backend and/or frontend code is updated.

```
npm run dev
```

4. Head over to [http://localhost:3000](http://localhost:3000) to see your app live!

## File Structure

### public/

Assets, like images and fonts, should be placed directly within this folder.

### src/

This is where basically all of our react code is stored.

#### components/

All of the react components that simply serve as a component (or feature) within a container.

#### containers/

All of the containers and components that make up an entire page within our application.

#### utils/

All of the additional JavaScript files or helper functions that do not logically fit within a container or a component.

### Routes.js

Sets the routes for all of the containers within the application. The UnauthenticatedRoute and AuthenticatedRoute components are custom Route components to allow for the application to secure routes and allow certain routes only if a user is authenticated.

## Additional Resources
* [Serverless Stack](https://serverless-stack.com/#table-of-contents) helped with implementing AWS Amplify and includes valuable information about login/authentication, routing, and overall architecture.

