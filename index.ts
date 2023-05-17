import dotenv from "dotenv";
import express, { Express, Request, Response, response } from "express";
import path from "path";
import cors from "cors";
import { db } from './database/sequelize'


dotenv.config();
const basePath = '';
const app: Express = express();
const reactBuildPath = path.join(__dirname, '..', 'client', 'build')

app.use(express.json());
app.use(cors());
app.use(basePath + '/', express.static(path.resolve(reactBuildPath)));
// Sync database on start-up.
//db.sequelize.sync(); - don't ever use. only needed to reflect new tables iin database.

app.get("/tamuic/*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(reactBuildPath+'/index.html'))
})

app.get('/api/specimen', async (req: Request, res: Response) => {
    const dbResp = await db.models.Specimen.findByPk(1234567)
    res.send(dbResp?.toJSON())
});

app.get('/api/login', async (req: Request, res: Response) => {

  const dbResp = await db.models.Users.findOne({ where: {Name: 'dummy', Password: 'dummy'}, attributes: {exclude: ['UseAutofill','DateTimeStamp','Password']}})
  console.log(dbResp?.toJSON())
  res.json(dbResp?.toJSON())
});

app.get('/api/users', async (req: Request, res: Response) => {
  const dbResp = await db.models.Users.findAll({where: {Active: true}, attributes: {exclude: ['UseAutofill','DateTimeStamp','Password']}})
  console.log(JSON.stringify(dbResp));
  res.json(JSON.stringify(dbResp));
});

const port = process.env.APP_PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
