
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import { db } from './database/sequelize'


dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

// Sync database on start-up.
console.log('Here')
db.sequelize.sync();

app.get('/', async (req: Request, res: Response) => {
    const dbResp = await db.models.Specimen.findByPk(1234567)
    res.send(dbResp?.toJSON())
});

const port = process.env.APP_PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
