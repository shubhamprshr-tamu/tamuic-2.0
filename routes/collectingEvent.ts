import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/:collectingEventID',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    console.log("test")
    console.log(req)
    const collectingEventID = req?.params?.collectingEventID.slice(1);
    const dbResp = await db.models.CollectingEvent.findByPk(collectingEventID);
    console.log(dbResp?.toJSON())
    res.send(dbResp?.toJSON())
})

export default router;