# Installation steps

- npm install
or 
- (if you have docker on your local machine) docker-compose up -d


# How to run your code / tests

There are two ways on running the code

- npm run startDEV (front and backend)
- npm run startDEV:server (only backend)


To run the test (Backend - Softonic)
- npm run test-server


# Where to find your code and how it is structured

The code is a fullstack MERN App with other technical challenges. Please focus on the following files: 

- Softonic API routes: server > softonic > softonic.route.ts
- Softonic TEST: server > softonic > softonic.test.ts
- Softonic Summary file : server > softonic > SUMMARY.md

- It is deployed in Google App Engine with this 2 API endpoinds: 
-https://boilerplate-mern.ey.r.appspot.com/api/softonic/programs/
-https://boilerplate-mern.ey.r.appspot.com/api/softonic/programs/21824



# Was it your first time writing a unit test, using a particular framework? How did you approach testing?

No, it was not my first time. I used to write some tests with jest and react testing library (frontend) also I used cypress E2E a bib. But it was my first time using mocha/chai supertest.

To Be Honest I didn´t approach testing with TDD metodology. I write the routes and functions first and when it was "working as expected" I added the tests. 
 
# What would you do to improve the performance/scalability/resilience?

- As we call an external api to get the programs and developer json, I would add some cache to these fetch calls using fetch-node-cache
- Also we can add so cache to the api response using node-cache / redis ...
- To improve performance / scalability / resilence we should just follow the recomended express best practices: https://expressjs.com/en/advanced/best-practice-performance.html
- Currently this application is deployed in Google App Engine, that gives us some out of the box scalability and resilence. 




# What would you have done differently if you had had more time? Why?

- 1) Add types (interfaces) to the data and functions
- 2) Move the routes logic to a controller folder to separate the concerns
- 3) Write a test for the data transformation. 
- 4) Some frontend UI ...
...