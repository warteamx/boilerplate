import { Request, Response } from 'express'
import fetch from 'node-fetch';

/**
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
            // Convert compatible key to string
            program.compatible.join(" | ")
            // Keep the order of the keys as in the exmaple
            return ({ id: program.id, author_info: { name: authorInfo.name, url: authorInfo.url }, ...program, })
        }
        )

        res.json({ data })

    } catch (err) {
        res.status(500)
    }

};

export const getProgram = async (req: Request, res: Response) => {

    try {
        let devData = await fetch("https://martinreboredo.com/api/developers.json")
        let programsData = await fetch('https://martinreboredo.com/api/programs.json')
        let devs = await devData.json()
        let programs = await programsData.json()

        // console.log("data devs", devs , "programs", programs)

        // find program by id 
        console.log("find program by id", programs)
        // let program = programs.find(program => program.id.toString() === req.params.id.toString())
        let program = programs.find(program => program.id.toString() === req.params.id.toString())
        // get author info

        if (program === undefined) {
            // If program not found send 404 and some other data...
            res.status(404).json({data:[]})
        } else {
            let authorInfo = devs.find(dev => program.developer_id.toString() === dev.id.toString())
            delete program.developer_id
            // keep object order
            let data = { id: program.id, author_info: { name: authorInfo.name, url: authorInfo.url }, ...program, }

            res.json({ data })
        }




    } catch (err) {
        res.status(500)
    }

};
