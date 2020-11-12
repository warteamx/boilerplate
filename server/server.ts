import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';


import { connectDb } from './models';

import { postMessages, putMessage } from './routes/messages';
import { getUser } from './routes/users';

import { test } from './routes/test';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build/')));

server.applyMiddleware({ app });

// user
app.get('/api/test', test);

// user
app.get('/api/users/:id', getUser);

// messages

app.post('/api/messages', postMessages);
app.put('/api/messages/:id', putMessage);




/**
 * PROD: 
 * in production mode server and index are on the same folder ( In developer mode there is no index file)
 *   */ 
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + 'build/index.html'));
  });

// tslint:disable-next-line:no-console
connectDb().then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error:', ${err}`);
});


app.listen(port, () => console.log(`Listening on port ${port}
Graphql on http://localhost:${port}${server.graphqlPath}`));