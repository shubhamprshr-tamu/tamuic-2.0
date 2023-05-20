import { Router, Request, Response } from "express";
import { db } from '../database/sequelize';
const router = Router()

router.get('/', async (req: Request, res: Response) => {
    const dbResp = await db.models.Users.findAll({where: {Active: true}, attributes: {exclude: ['UseAutofill','DateTimeStamp','Password']}})
    res.json(dbResp);
});

router.post('/login',  async (req: Request, res: Response) => {
    const { username, password } = req.body
    const dbResp = await db.models.Users.findOne({ where: {Name: username, Password: password}, attributes: {exclude: ['UseAutofill','DateTimeStamp','Password']}})
    res.json(dbResp?.toJSON())
})

export default router;