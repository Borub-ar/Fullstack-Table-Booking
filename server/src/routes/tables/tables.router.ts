import { Router } from 'express';
import { getAllTablesHandler } from '../tables/tables.controller.js';

const tableRouter = Router();

tableRouter.get('', getAllTablesHandler);

export default tableRouter;
