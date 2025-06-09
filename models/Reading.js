const mongoose = require('mongoose');
const { Schema } = mongoose;

const readingSchema = new Schema({
  account_no: { type: String, required: true, unique: true },
  reading_date: {type:Date, default: Date.now},
  reading : {type:Number, required:true}
});

module.exports = mongoose.model('Reading', readingSchema);