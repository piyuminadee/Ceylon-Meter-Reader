require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const customerRoutes = require('../routes/customers');
const readingRoutes = require('../routes/readings');
const cors = require('cors');
// import readingRoutes from './routes/readings';
dotenv.config()
const app = express()
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
console.log('MONGO_URI:', process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
connectDB();


app.use('/api/customers', customerRoutes);
app.use('/api/readings', readingRoutes);
// app.use('/api/bills', billRoutes);


const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});