const express = require('express');
const app = express();
const port = 3000;

// connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/professionalsDB')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

// Middleware to parse JSON request bodies
app.use(express.json());

// import routes
const professionalsRoutes = require('./routes/professionalsRoutes');

app.use("/api/professionals", professionalsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});