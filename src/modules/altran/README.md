## ALTRAN CHALLENGE

### USER STORY
- User can see the the Gnomes in Brastlewark. 
- User can filter by name and age

### TECH
- I used Material UI for the visual elements. 
- I used Typescript
- I created this MERN boilerplate code for Docker, hosting the code (Google Cloud) and deploy de app with CD/CI. 
- Docker or npm (npm recomended for altran challenge) to run the project

## Available Scripts
 - This project has a Docker container Dev Mode (Node + MongoDB)

### Docker 
 To run the project in DEV Mode with Docker: 
 - 1 ) create a .env file with this variables:
```
DATABASE_URL= mongodb://localhost:27017/mongodb/boilerplate
MONGODB=mongodb://mongodb:27017/api)
```
- 2 ) run command:  docker-compose up -d

### Local NPM (Recomended for Altran challenge)
To run the project in Dev Mode locally
(It will only run the frontend of the app)

- npm install
&
- npm run startDEV:app

tests: npm run test


### FOLDER STRUCTURE

All the relevant code for this challenge is in src > modules > altran
- elements folder: Reusable components
- screens folder: Logic / Api calls / and what the final users sees. 
- src > routes : Routes for the app 

No relevant folfers for this Altran Challenge:
- - There is a (backend) server folder, but it is not relevant for this Altran chanllenge. 
- - The structure of the (frontend) "src" folder:
- - - assets: Images and Media for the app
- - - components: (Not relevant for Altran Challenge)
- - - axpel: (Not relevant for Altran Challenge)
- - - modules: Full and independent Apps. Code for this challenge is in the subfolder altran. 
