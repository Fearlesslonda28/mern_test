const express = require("express");
const professionals = require("./data/professionals");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/professionalsDB")
.then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});
// Middleware to parse JSON request bodies
app.use(express.json());

// routes
const professionalsRoutes = require("./routes/professionalsRoutes");

app.use("/api/professionals", professionalsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
