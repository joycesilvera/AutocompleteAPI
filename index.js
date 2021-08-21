const express = require("express");
const data = require("./routes/addresses");

// Initialize App
const app = express();
app.use(express.json());
app.use("/api/addresses", data);
// Assign route

// Start server on PORT 5000
app.listen(5000, () => {
  console.log("Server started!");
});
