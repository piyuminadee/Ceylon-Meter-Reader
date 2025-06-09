const mongoose = require('mongoose');
const { Schema } = mongoose;

const billSchema = new Schema({
  account_no: { type: String, required: true, unique: true },
  prevReadingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reading' },
  currentReadingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reading' },
  unitsUsed: Number,
  fixedCharge: Number,
  firstRange: Number,
  secondRange: Number,
  thirdRange: Number,
  totalAmount: Number
});

module.exports = mongoose.model('Bill', billSchema);