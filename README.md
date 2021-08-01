
# PROJECT
- *Description:* A Development boileplate / starter code for MERN apps
- *Tech:* TypeScript - React - Redux - Express - Mongo DB
- *CD/CI:* Using CD/CI with Google Cloud Build for Test, Build and Deploy workflow on main git branch
- *Changelog:* Gitmoji Changelog - https://docs.gitmoji-changelog.dev/#/
- *UI:* Material UI  https://material-ui.com/
- *Tests:* Jest + React Testing Library
- *Tests Backedn:* Mocha/Chai + SuperTest
- *Deployment:* Deploy in Google App Engine URL: https://boilerplate-mern.ey.r.appspot.com/

## Next 
- Apollo GraphQL Express
- Login Funcionality 
- Testing
- Swagger / JS docs


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



## Possible Issues
- Server is run on ts-dev package, not suitable for production. For production, create a build

- Mongo express cannot connnect : https://github.com/mongo-express/mongo-express-docker/issues/35


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


