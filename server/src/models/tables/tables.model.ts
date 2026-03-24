import AppError from '../../AppError.js';
import Table from '../tables/tables.mongo.js';

const getAllTables = async () => {
  try {
    const allTables = await Table.find();
    return { success: true, message: 'All Tables Fetched', data: allTables };
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new Error('Something went wrong while creating user', { cause: error });
  }
};

export { getAllTables };
