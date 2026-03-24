import type { Request, Response } from 'express';

import { getAllTables } from '../../models/tables/tables.model.js';
import tryCatch from '../../utils/tryCatch.js';

const getAllTablesHandler = tryCatch(async (req: Request, res: Response) => {
  const result = await getAllTables();
  return res.status(200).json(result);
});

export { getAllTablesHandler };
