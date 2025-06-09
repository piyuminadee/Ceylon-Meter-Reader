const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  account_no: { type: String, required: true, unique: true },
  name: String,
});

module.exports = mongoose.model('Customer', customerSchema);