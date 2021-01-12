import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema'
import { resolvers } from './graphql/resolvers'

import { connectDb } from './models';
import Realm from "realm"
import { postMessages, putMessage } from './routes/messages';
import { getUser } from './routes/users';

import { test } from './routes/test';


const RealmApp = new Realm.App({ id: "application-0-xzvns" });

async function handleLogin() {
  // Create a Credentials object to identify the user.
  // Anonymous credentials don't have any identifying information, but other
  // authentication providers accept additional data, like a user's email and
  // password.

  const credentials: Realm.Credentials = Realm.Credentials.anonymous();

  // You can log in with any set of credentials using `app.logIn()`

  const user: Realm.User = await RealmApp.logIn(credentials);

  console.log(`Logged in with the user id: ${user.id}`);
};
handleLogin().catch(err => {
  console.error("Failed to log in:", err)
});

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
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

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