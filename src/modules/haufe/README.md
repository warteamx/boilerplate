# TASK
We need a fancy application, with backend and frontend, which consume the public API of
Rick & Morty: https://rickandmortyapi.com. This API should be consumed from your backend
application, not directly from the frontend.

- ✔️ LOGIN: The users need to be authenticated to consume the application. The auth have to keep
the state between reloads.
- ✔️ LIST ALL CHARACTER VIEW : An indicator to know if a character is in fav list.
- ✔️ DETAIL CHARACTER VIEW: A button to add the character to a fav list, in case the character is in fav list it will be
removed from fav list.
- ❌ 404 PAGE: (No Time)
- ✔️ PAGINATION:

## INFO 
- The task was done over a MERN boilerplate that I created for Tecnical challenges [https://github.com/martinrebo/boilerplate]
- Tech Stack: Typescript / React / Node / Express / Google App Engine / Google Build / Firebase / Gitmoji SemVer / Docker
- Frontend: 
- - Using React (create react app) / Redux toolkit / React Query
- - Using Css grid for the layout
- Backend: Express / Firebase Admin / MongoDB (Atlas)

### LOGIN 
- Used firebase Auth for Login Functionality.
- Why? It is a Production ready third party solution.  To create a Login feature from scratch is a long process
- Pros: Easy to install, generous free tier
- Cons: $$$ / not open source. 

## KNOW ISSUES
- Front & Back: The data is fetched from the database on every "Add to Favs" click. It would be better have a Socket.Io conection to listen for updates on the favs. 
- Front: Not using Redux. I created a Redux store with Toolkit, and Everytime an user log in/out a dispatch action add the user to the store. I just did this as a way to showcase the use of redux, but I wouldn´t use for a project of this size. It is an overkill.
- Front: There is an old ( Legacy ) store folder for redux. (It belongs to another tecnicall chanllenge) I didn´t deleted because I want to refactor the old project. 
- Front: The style and css is very poor (No time for more)
- Back: Not really MVC.  I didnt create a controller for the route. (I didnt have time, but I like to keep the the database logic outside the route )




