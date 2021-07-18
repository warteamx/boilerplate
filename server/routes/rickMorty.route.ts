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
        let userFavs = await Favs.findOneAndUpdate({ userId: user.uid }, { userId: user.uid }, { upsert: true, new: true, setDefaultsOnInsert: true }).exec()

        console.log("UserFavs getAPI")
        res.json({ data, favs: userFavs })

    } catch (err) {
        res.status(500)
    }

};

export const postFavs = async (req: Request, res: Response) => {

    const user = req['currentUser'];

    if (!user) {
        res.status(403).send('You must be logged in!');
    }

    try {
        let findUser = await Favs.find({ userId: user.uid }).exec()
        //@ts-ignore
        if (findUser[0].characterId.includes(req.body.id)) {
            //@ts-ignore
            let favs = await Favs.updateOne({ userId: user.uid }, { $pull: { characterId: req.body.id } }).exec()

            return res.json({findUser, favs})
        } else {
            //@ts-ignore
            let favs = await Favs.findOneAndUpdate({ userId: user.uid }, { $push: { characterId: req.body.id } }, { upsert: true, new: true, setDefaultsOnInsert: true }).exec()
            return res.json({findUser, favs})
        }


    } catch (err) {
        res.status(500)
    }

};
