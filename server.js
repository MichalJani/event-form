const express = require('express');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/event', require('./routes/api/event'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
