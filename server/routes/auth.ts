import models from '../models/index'

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)


export const authUser = async (req: any, res: any) => {

    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();    
    
    // const user = await db.user.upsert({ 
    //     where: { email: email },
    //     update: { name, picture },
    //     create: { name, email, picture }
    // })

//  let user = await models.User.findOne({email}, (err, user) => {
//         if (err) { throw err }
//         if (user) {
//             console.log('user found', user) 
//             return user
//         } else { console.log('user not found')}

//     } )

    // req.session.userId = user.id

    res.status(201)
    res.json({ id: 'test-id', name, email, picture })

}