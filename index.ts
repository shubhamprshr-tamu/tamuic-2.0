import dotenv from "dotenv";
import express, { Express, Request, Response, response } from "express";
import path from "path";
import cors from "cors";
import { db } from './database/sequelize';
import { userRouter, specimenRouter, collectingEventRouter, localityRouter, geoReferenceRouter,
  specimenAttributesRouter, specimenBioAttributesRouter, specimenDetLabelsRouter,
  specimenMiscCodesRouter  } from "./routes/apiroutes";


dotenv.config();
const basePath = '';
const app: Express = express();
const reactBuildPath = path.join(__dirname, '..', 'client', 'build')

app.use(express.json());
app.use(cors());
app.use(basePath + '/', express.static(path.resolve(reactBuildPath)));
// Sync database on start-up.
//db.sequelize.sync(); - don't ever use. only needed to reflect new tables iin database.

// all ui page routes.
app.get("/tamuic/*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(reactBuildPath+'/index.html'))
})

app.use('/api/specimen', specimenRouter);

app.use('/api/collectingEvent', collectingEventRouter);

app.use('/api/users', userRouter);

app.use('/api/locality', localityRouter);

app.use('/api/geoReference', geoReferenceRouter);

app.use('/api/specimenAttributes', specimenAttributesRouter);

app.use('/api/specimenBioAttributes', specimenBioAttributesRouter);

app.use('/api/specimenDetLabels', specimenDetLabelsRouter);

app.use('/api/specimenMiscCodes', specimenMiscCodesRouter);


const port = process.env.APP_PORT || 8000;

// Error 404 page.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
