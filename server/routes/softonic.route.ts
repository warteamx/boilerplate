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


export const getProgramList = async (req: Request, res: Response) => {


    try {

        let devData = await fetch("https://martinreboredo.com/api/developers.json")
        let programsData = await fetch('https://martinreboredo.com/api/programs.json')
        let devs = await devData.json()
        let programs = await programsData.json()

        // https://stackoverflow.com/questions/63616406/how-to-merge-two-array-of-objects-based-on-same-key-and-value-in-javascript
        // https://stackoverflow.com/questions/4647817/javascript-object-rename-key

        const data = programs.map(program => {
            // I suppose that the id property can be a string of numbers and/or letters - So I compare the strings
            let authorInfo = devs.find(dev => program.developer_id.toString() === dev.id.toString())
            delete program.developer_id
            return ({ id: program.id, author_info: { name: authorInfo.name, url: authorInfo.url }, ...program, })
        }
        )

        res.json({ data })

    } catch (err) {
        res.status(500)
    }

};

export const getProgram = async (req: Request, res: Response) => {
    console.log(req.query)

    try {
        let devData = await fetch("https://martinreboredo.com/api/developers.json")
        let programsData = await fetch('https://martinreboredo.com/api/programs.json')
        let devs = await devData.json()
        let programs = await programsData.json()

        // find program by id 
        let program = programs.find(program => program.id.toString() === req.query.id.toString())
        // get author info
        let authorInfo = devs.find(dev => program.developer_id.toString() === dev.id.toString())
        delete program.developer_id
        // keep object order
        let data = { id: program.id, author_info: { name: authorInfo.name, url: authorInfo.url }, ...program, }

        res.json({ data })

    } catch (err) {
        res.status(500)
    }

};
