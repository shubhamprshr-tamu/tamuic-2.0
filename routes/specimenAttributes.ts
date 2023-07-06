import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/specimenId/:specimenId',  async (req: Request, res: Response) => { // Need to add remaining API calls 
    const specimenId = req?.params?.specimenId;
    try {
        const dbResp = await db.models.SpecimenAttributes.findOne({ where: { SpecimenID: specimenId } });
        if (dbResp) {
          res.send(dbResp.toJSON());
        } else {
          res.status(404).send("not found in database"); // SpecimenAttributes not found
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error"); // Internal server error
      }
})

router.get('/:specimenAttributeId',  async (req: Request, res: Response) => { // Need to add remaining API calls 
  const specimenAttributeId = req?.params?.specimenAttributeId;
  try {
      const dbResp = await db.models.SpecimenAttributes.findByPk(specimenAttributeId);
      if (dbResp) {
        res.send(dbResp.toJSON());
      } else {
        res.status(404).send("not found in database"); // SpecimenAttributes not found
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500); // Internal server error
    }
})

export default router;