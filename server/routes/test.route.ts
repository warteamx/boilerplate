import { Request, Response } from 'express'


export const getTest= async (req: Request, res: Response) => {

res.json({data: "it is working"})

};