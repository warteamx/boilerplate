
# PROJECT
- *Description:* A Development boileplate / starter code for apps
- *Tech:* TypeScript - React - Redux - Express 
- *CD/CI:* Using CD/CI with Google Cloud Build for Test, Build and Deploy workflow on main git branch
- *Changelog:* Gitmoji Changelog - https://docs.gitmoji-changelog.dev/#/
- *UI:* Material UI  https://material-ui.com/
- *Tests:* Jest + React Testing Library
- *Deployment:* Deploy in Google App Engine URL: https://boilerplate-mern.ey.r.appspot.com/

## Next 
- Apollo GraphQL Express
- Login Funcionality 
- Admin Panel
- Charts Library
- PrimeReact UI 

## Available Scripts
 - This project has a Docker container Dev Mode (Node + MongoDB)
 - Also For DB we can use Atlas MongoDB with an .env variable
 - To deploy on the Google App Engine we use Google Build (cloudbuild.yaml)

### Docker 
 To run the project in DEV Mode with Docker: 
- docker-compose up -d
### Local 
To run the project in Dev Mode locally
- npm run startDev 


## GUIDES & TUTORIALS

### REACT
- https://reactrouter.com/web/guides/quick-start
- https://gist.github.com/cdiggins/338a6c31b43f5d88a73bd2aafb4204fb

### EXPRESS -NODE
- https://www.robinwieruch.de/mongodb-express-setup-tutorial
- https://dev.to/loujaybee/using-create-react-app-with-express
- https://medium.com/@anwesha_das/a-strongly-typed-create-react-app-with-an-express-api-server-44e2334ccc71
- https://github.com/goldbergyoni/nodebestpractices  


## REDUX
- https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
- https://codesandbox.io/s/react-redux-typescript-oc4hi?file=/src/App.tsx
- https://react-redux.js.org/introduction/basic-tutorial

### DOCKER PROD vs DEV
 - https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp
 - https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f
 
### TESTING :
#### Testing React
- https://blog.sapegin.me/all/react-testing-1-best-practices/
- https://github.com/goldbergyoni/javascript-testing-best-practices
#### Testing Dates
- https://dev.to/maxpou/how-to-mock-date-with-jest-3k4b
- https://github.com/testing-library/dom-testing-library/issues/410

## Possible Issues
- Server is run on ts-dev package, not suitable for production. For production, create a build

- Mongo express cannot connnect : https://github.com/mongo-express/mongo-express-docker/issues/35


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


