const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const postRoutes = require('./routes/postRoutes');
// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', postRoutes);
// Test endpoint
app.get('/', (req, res) => {
  res.send('🎉 Hello from Alaa\'s Node.js API!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ DB Connection Error:', err);
  });
