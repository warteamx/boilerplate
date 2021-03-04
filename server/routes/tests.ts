import models from '../models/index'

export const getTest = async (req: any, res: any) => {
  let test = await models.Test.find({}).exec()
    res.json(
      {test}
    );
     
  };

  export const postTest = async (req: any, res: any) => {

    let test = await models.Test.updateOne( {}, req.body).exec()

    // console.log(req.body, test)
    res.json( {data: req.body} ) ;
  };