import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
  mexGuestsNumber: { type: Number, required: true },
  tableNumber: { type: Number, required: true },
});

const Table = mongoose.model('table', tableSchema);

export default Table;
