import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/:collectingEventID',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const collectingEventID = req?.params?.collectingEventID;
    // console.log(dbResp?.toJSON())
    try{
        const dbResp = await db.models.Collectors.findOne({ where: {CollectingEventID: collectingEventID}});
        if (dbResp) {
            res.send(dbResp.toJSON());
        } else {
            res.status(404).send("not found in database"); // Locality not found
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error"); // Internal server error
    }
})

export default router;