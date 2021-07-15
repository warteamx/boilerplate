import {Request, Response, NextFunction} from 'express'
import admin from 'firebase-admin';

admin.initializeApp();

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
        console.log("User Exists", decodedToken)
      } catch (err) {
        console.log(err);
      }
    }
  
    next();
  }

  export default decodeIDToken
