import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/:localityID',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const localityID = req?.params?.localityID.slice(1);
    const dbResp = await db.models.Georeference.findOne({ where: {LocalityID:localityID}});
    res.send(dbResp?.toJSON())
})

// router.get('/:localityName',  async (req: Request, res: Response) => { // Need to add remaining API calls 
//     console.log("test")
//     console.log(req)
//     const localityID = req?.params?.localityName.slice(1);
//     const dbResp = await db.models.Locality.findOne(localityName);
//     console.log(dbResp?.toJSON())
//     res.send(dbResp?.toJSON())
// })

export default router;