export const getUser = (req: any, res: any) => {
    const id = req.params.id;
    console.log("request made", req.params)
    res.json({ express: `${id} Express is working!  ` });
  };