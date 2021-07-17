import { Request, Response } from 'express'
import fetch from 'node-fetch';
import Favs from '../models/rickMorty.model'


export const getRickMortyApi = async (req: Request, res: Response) => {

    const user = req['currentUser'];

    // console.log(user?.uid)

    if (!user) {
        res.status(403).send('You must be logged in!');
    }

    try {
        let result = await fetch(`https://rickandmortyapi.com/api/character`)
        let data = await result.json()
        let userFavs = await Favs.find({}).exec()
        res.json({ data, favs: userFavs[0] })

    } catch (err) {
        res.status(500)
    }

};

export const postFavs = async (req: Request, res: Response) => {

    const user = req['currentUser'];

    // console.log("post FAVS", req.body, user.uid)

    if (!user) {
        res.status(403).send('You must be logged in!');
    }

    try {
        let findUser = await Favs.find({}).exec()
        //@ts-ignore
        if (findUser[0].characterId.includes(req.body.id)) {
            console.log("it exists")
            //@ts-ignore
            let favs = await Favs.updateOne({ userId: user.uid }, { $pull: { characterId: req.body.id } }).exec()
            console.log("deleted", favs.n, favs.nModified, findUser)
          
            return  res.json(findUser)
        } else {
            //@ts-ignore
            let favs = await Favs.updateOne({ userId: user.uid }, { $push: { characterId: req.body.id } }).exec()
            console.log("updated, ", favs.n, favs.nModified, findUser)
            return  res.json(findUser)
        }


    } catch (err) {
        res.status(500)
    }

};
