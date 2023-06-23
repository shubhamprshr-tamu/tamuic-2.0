import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/:specimenId',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const specimenId = req?.params?.specimenId.slice(1);
    const dbResp = await db.models.Specimen.findByPk(specimenId);
    // console.log(dbResp?.toJSON())
    res.send(dbResp?.toJSON())
})

export default router;