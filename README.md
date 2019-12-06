# Auth and Privileges - Mock Office Furniture Business Platform

<p align="center">
  <img src="./frontend-auth-and-privileges/public/safe.svg" alt="Auth and Privileges illustration" width="500px">
</p>

## Application Description
We created a web application that integrates basic security protocols such as authentication, authorization, and user privileges. The application is essentially a simple business application for a business that produces and sells office furniture. The user roles and privileges are setup like so:

| Role | Dashboard Privileges | Product Privileges | Additional Notes |
| :---: | :---: | :---: | :---: |
| Admin | Manage all users | Manage both price and quanity | n/a |
| Production Manager | Manage Production Employees | Manage quanity | n/a |
| Production Employee | n/a | View only | n/a |
| Sales Manager | Manage Sales Employees | Manage price | n/a |
| Sales Employee | n/a | View only | n/a |
| User | n/a | View only | Default role on sign up, needs confirmation for role and salary from an Admin |


## What Technologies are Being Used?
### Full-Stack JavaScript - MERN Stack
* M - [MongoDB](https://www.mongodb.com/), a general purpose, document-based, distributed database.
  * [Mongoose](https://mongoosejs.com/) for elegant mongodb object modeling for Node.js.
  
* E - [ExpressJS](https://expressjs.com/), a minimal and flexible Node.js web application framework for creating robust APIs.

* R - [React](https://reactjs.org/), a JavaScript library for building user interfaces.
  * [reactstrap](https://reactstrap.github.io/) for the component library.
  * [react-router](https://reacttraining.com/react-router/) for routing.
  * [redux](https://redux.js.org/) for managing global state.
  * [react-redux](https://react-redux.js.org/) for official React bindings in Redux.
  * [redux-thunk](https://www.npmjs.com/package/redux-thunk) for Thunk middleware in Redux.
  * [axios](https://www.npmjs.com/package/axios) for sending asynchronous HTTP requests to API endpoints and performing CRUD operations.
  
* N - [Node.js](https://nodejs.org/), an asynchronous event-driven JavaScript runtime designed to build scalable network applications.
  * [jsonwebtokens](https://www.npmjs.com/package/jsonwebtoken) for implementing JSON Web Tokens.
  * [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords.

## Getting Started
In order to use the application locally, you'll need to do a few things first.

1. Clone this repository and `cd` into the repository's directory
```
git clone https://github.com/msichterman/auth-and-privileges.git && cd ./auth-and-privileges
```

2. Install all of the `node_modules` required for the project. Depending on your computer's configuration, you may need to prefix this command with a `sudo`.
```
npm install && npm run client-install
```
or
```
sudo npm install && sudo npm run client-install
```

3. Lastly, run the following command to get the project off the ground. This command will not only build your JS files, but it will also auto-compile your files on every file save. This allows for hot reloading on-save when the backend and/or frontend code is updated.

```
npm run dev
```

4. Head over to [http://localhost:3000](http://localhost:3000) to see the application live!

## File Structure

    auth-and-privileges/
    ├── ...
    │
    ├── config/                                 
    │   └── default.json                            # Info such as MongoDB URI and JWT Secret
    │
    ├── frontend-auth-and-privileges/               # The entire React frontend application
    │   ├── ...
    │   │
    │   ├── public/                                 # Stores assets like images and fonts
    │   │   ├── ...
    │   │   └── index.html                          # The overall page template
    │   │
    │   └── src/
    │       ├── index.js                            # The JavaScript entry point
    │       ├── ...
    │       ├── Routes.js                           # Defines all of the frontend routes                            
    │       ├── store.js                            # Sets up the Redux store
    │       │
    │       ├── components/                         # Any component featured within a container
    │       │   └── ...
    │       │
    │       ├── containers/                         # Makes up the pages
    │       │   └── ...
    │       │
    │       ├── actions/                            # Redux actions
    │       │   ├── ...
    │       │   └── types.js                        # Defines all the types of actions
    │       │
    │       ├── reducers/                           # Redux reducers
    │       │   ├── ...
    │       │   └── index.js                        # Combines all of the reducers
    │       │
    │       └── utils/
    │           ├── custom-hooks.js                 # Any custom hooks
    │           │
    │           └── CustomRoutes/                   # The custom route components that help with routing and redirects
    │               └── ...
    │
    ├── middleware/                                 # Middleware for the APIs
    │   └── ...
    │
    ├── models/                                     # MongoDB models defined by schemas
    │   └── ...
    │
    ├── routes/
    │   └── api/                                    # Defines ExpressJS API endpoints 
    │       └── ...
    │
    └── server.js                                   # Defines backend MongoDB connection, routes, and port

## References
* [Serverless Stack](https://serverless-stack.com/#table-of-contents) helped with implementing the React frontend including functional components, hooks, authenticated routing, and overall frontend structure.
* Brad Traversy's "Learn The MERN Stack" series on YouTube, which guided the development of the overall full-stack application.
    * [Learn The MERN Stack - YouTube Series](https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE)
    * ["MERN Shopping List" Application - GitHub Repository](https://github.com/bradtraversy/mern_shopping_list)

