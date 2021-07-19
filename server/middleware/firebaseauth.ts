import { Request, Response, NextFunction } from 'express'
import admin from 'firebase-admin';

/**
 * https://medium.com/@brian.young.pro/how-to-add-environmental-variables-to-google-app-engine-node-js-using-cloud-build-5ce31ee63d7
 * 
 * 
 */

// let serviceAccount = require('../../../boilerplate-mern-firebase-adminsdk-je4di-f6df6e0167.json')
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// }); 

// console.log("firebase config", process.env.FIREBASE_CONFIG)

// if (process.env.FIREBASE_CONFIG) admin.initializeApp()
// if (!process.env.FIREBASE_CONFIG) {
//   let serviceAccount = require('../../../boilerplate-mern-firebase-adminsdk-je4di-f6df6e0167.json')
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });
// }

admin.initializeApp()


/**
 * Decodes the JSON Web Token sent via the frontend app
 * Makes the currentUser (firebase) data available on the body.
 */
async function decodeIDToken(req: Request, res: Response, next: NextFunction) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }

  next();
}

export default decodeIDToken
