import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import {connectDb} from './models';
 
import  { getRickMortyApi, postFavs  } from './routes/rickMorty.route'
import {getProgramList, getProgram} from './routes/softonic.route'
import {getTest} from './routes/test.route'

// import { getTest , postTest } from './routes/tests';

import authFirebase from './middleware/firebaseauth'
 

const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


 //@ts-ignore https://github.com/expressjs/express/issues/4618

 //@ts-ignore https://github.com/expressjs/express/issues/4618

 app.use(express.json());
  //@ts-ignore https://github.com/expressjs/express/issues/4618
 app.use(express.urlencoded())
app.use(cors());
app.use(express.static(path.join(__dirname, 'build/')));

 
 //@ts-ignore
app.use(authFirebase)
 

// Haufe Technical Test RickMorty
app.get('/api/characters/', authFirebase,  getRickMortyApi)
app.post('/api/characters/favs/', authFirebase,  postFavs)

// Softonic Tecnical Test 
app.get('/api/softonic/programs/',  getProgramList)
app.get('/api/softonic/programs/:id',  getProgram)


app.get('/api/test',  getTest)
 
/**
 * PROD: 
 * in production mode server and index are on the same folder ( In developer mode there is no index file)
 *   */
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + 'build/index.html'));
});

// tslint:disable-next-line:no-console
 //@ts-ignore
connectDb().then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error:', ${err}`);
  }); 

 
app.listen(port, () => console.log(`Listening on port ${port}
http://localhost:${port}`));
 

export default app;