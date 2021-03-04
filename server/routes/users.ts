// import { model } from 'mongoose';
import models from '../models/index'

// api/user/
export const getUser = async (req: any, res: any) => {
  const id = req.params.id;
  console.log("request made", req.params)

  // let msg = new models.User({
  //   username: 'ADA.LOVELACE@GMAIL.COM'
  // })
  
  // msg.save()
  //    .then(doc => {
  //      console.log(doc)
  //      res.json({express: 'user saved'})
  //    })
  //    .catch(err => {
  //      console.error(err)
  //    })

  await models.User.find({}, (err, user) => {
    if (err) {
    res.json({express: 'Error',
              user: err})
  throw err
  }
    if (user) {
      console.log(user)
      res.json(
        {
          express: `${id} Express is working! 
                and MongoDB too  `,
          user: user
        });
    }
  })

};