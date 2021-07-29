import { Request, Response } from 'express'
import fetch from 'node-fetch';
import Favs from '../models/rickMorty.model'
const path = require('path');
const _ = require('lodash.assign');

/**
 * 
 * 
 * 
Write a NodeJS API service named **Softonic API** (in the folder `softonic-api`) exposing the following endpoints:

* One that returns the following format given a **program id**:
* And another endpoint that returns a **collection of programs**:


 */


export const getProgram = async (req: Request, res: Response) => {


    try {

        let devData = await fetch("https://martinreboredo.com/api/developers.json")
        let programsData = await fetch('https://martinreboredo.com/api/programs.json')
        let devs = await devData.json()
        let programs = await programsData.json()

        // https://stackoverflow.com/questions/63616406/how-to-merge-two-array-of-objects-based-on-same-key-and-value-in-javascript

      const result =  programs.map( program => {
        
          return  ({...program, ...devs.find(dev => dev.id === program.developer_id)})
      }
       )

        // devs.forEach(function (item) {
        //     resultObj[item.id] = item;
        // });
        // programs.forEach(function (item) {
        //     resultObj[item.number] = _.assign({}, resultObj[item.number], item);
        // });

        // var result = _.values(resultObj);

        res.json({ status: "working", result })

    } catch (err) {
        res.status(500)
    }

};

export const getProgramList = async (req: Request, res: Response) => {

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

            return res.json({ findUser, favs })
        } else {
            //@ts-ignore
            let favs = await Favs.findOneAndUpdate({ userId: user.uid }, { $push: { characterId: req.body.id } }, { upsert: true, new: true, setDefaultsOnInsert: true }).exec()
            return res.json({ findUser, favs })
        }


    } catch (err) {
        res.status(500)
    }

};
