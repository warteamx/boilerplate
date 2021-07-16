import { Request, Response } from 'express'
import fetch from 'node-fetch';


export const getRickMortyApi = async (req: Request, res: Response) => {

    const user = req['currentUser'];

    if (!user) { 
        res.status(403).send('You must be logged in!');
    }

    try {
        let result = await fetch(`https://rickandmortyapi.com/api/`)
        let data = await result.json()
        res.json({ data })

    } catch (err) {
        res.status(500)
    }

};
