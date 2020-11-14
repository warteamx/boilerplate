# PROJECT
- A Development boileplate / starter code for apps
- Tech: TypeScript - React - Redux - Express 
- Using CD/CI with Google Cloud Build for Test, Build and Deploy workflow on main git branch
- Gitmoji Changelog - https://docs.gitmoji-changelog.dev/#/
- UI: PrimeReact https://www.primefaces.org/primereact/
- Deploy in Google App Engine URL: https://boilerplate-mern.ey.r.appspot.com/

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


## DOCS & TUTORIALS
- https://www.robinwieruch.de/mongodb-express-setup-tutorial
- https://react-redux.js.org/introduction/basic-tutorial
- https://dev.to/loujaybee/using-create-react-app-with-express
- https://medium.com/@anwesha_das/a-strongly-typed-create-react-app-with-an-express-api-server-44e2334ccc71
- https://reactrouter.com/web/guides/quick-start
- https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
- https://codesandbox.io/s/react-redux-typescript-oc4hi?file=/src/App.tsx

DOCKER PROD vs DEV
 - https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp
 - https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f
 

## Possible Issues
- Server is run on ts-dev package, not suitable for production. For production, create a build

- Mongo express cannot connnect : https://github.com/mongo-express/mongo-express-docker/issues/35


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


