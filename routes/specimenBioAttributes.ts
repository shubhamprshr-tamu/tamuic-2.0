import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/specimenId/:specimenId',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const specimenId = req?.params?.specimenId.slice(1);
    console.log(specimenId)
    try {
        const dbResp = await db.models.SpecimenBioAttributes.findOne({ where: { SpecimenID: specimenId } });
        console.log(dbResp?.toJSON())
        if (dbResp) {
          res.send(dbResp.toJSON());
        } else {
          res.status(404).send("not found in database"); // SpecimenBioAttributes not found
        }
      } catch (error) {
        console.error(error);
        res.sendStatus(500); // Internal server error
      }
})

router.get('/:specimenBioAttributeId',  async (req: Request, res: Response) => { // Need to add remaining API calls 
  const specimenBioAttributeId = req?.params?.specimenBioAttributeId;
  try {
      const dbResp = await db.models.SpecimenBioAttributes.findByPk(specimenBioAttributeId);
      if (dbResp) {
        res.send(dbResp.toJSON());
      } else {
        res.status(404).send("not found in database"); // SpecimenBioAttributes not found
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500).send("error while fetching from database"); // Internal server error
    }
})

export default router;