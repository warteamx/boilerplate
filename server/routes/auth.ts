
import { Request, Response } from "express";
import models from '../models/index'


export const authUser = async (req: Request, res: Response) => {


    res.status(201)
    res.json({ id: 'test-id', resquest: req.body})

}