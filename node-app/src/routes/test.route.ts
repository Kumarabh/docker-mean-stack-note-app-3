import express from 'express';
import { getAllUsers, getUserById } from '../controllers/test.controller';
const testRouter = express.Router();

testRouter.route('/')
.get(getAllUsers)

testRouter.route('/:id')
.get(getUserById)

export default testRouter;