import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import dbConnection from '../config/db';
import testRouter from './routes/test.route';
import notesRouter from './routes/notes.route';

dotenv.config({path: './config/.env'});
dbConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));
app.use('/test', testRouter)
app.use('/api/v1/notes', notesRouter);


app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));