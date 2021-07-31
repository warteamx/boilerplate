# Installation steps

- npm install


# How to run your code / tests

There are two ways on running the code

- npm run startDEV
- (if you have docker on your local machine) docker-compose up -d

To run the test:
- npm run test


# Where to find your code and how it is structured

The code is a fullstack MERN App with other technical challenges 
- Softonic API routes: server > routes > softonic.route.ts



# Was it your first time writing a unit test, using a particular framework? How did you approach testing?

...


# What would you do to improve the performance/scalability/resilience?

- As we call an external api to get the programs and developer json, I would add some cache to these fetch calls using fetch-node-cache
- Also we can add so cache to the api response using node-cache
- To improve performance / scalability / resilence we should just follow the recomended express best practices: https://expressjs.com/en/advanced/best-practice-performance.html



# What would you have done differently if you had had more time? Why?

- 1) Add types (interfaces) to the data and functions
- 2) Move the routes logic to a controller folder to separate the concerns
...