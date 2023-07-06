import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/:identifier',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const identifier = req?.params?.identifier;
    const dbResp = await db.models.Specimen.findOne({where: {Identifier: identifier}});
    console.log(dbResp?.toJSON())
    res.send(dbResp?.toJSON())
})

export default router;