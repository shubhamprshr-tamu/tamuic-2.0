import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/specimenId/:specimenId',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const specimenId = req?.params?.specimenId.slice(1);
    try {
        const dbResp = await db.models.SpecimenMiscCodes.findOne({ where: { SpecimenID: specimenId } });
        if (dbResp) {
          res.send(dbResp.toJSON());
        } else {
          res.status(404).send("not found in database"); // SpecimenMiscCodes not found
        }
      } catch (error) {
        console.error(error);
        res.sendStatus(500); // Internal server error
    }
})

export default router;