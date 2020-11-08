import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';



import models, { connectDb } from './models';

import { postMessages, putMessage } from './routes/messages';
import { getUser } from './routes/users';

import { test } from './routes/test';

const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'build/')));

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


app.listen(port, () => console.log(`Listening on port ${port}`));