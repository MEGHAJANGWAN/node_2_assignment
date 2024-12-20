const express = require("express");

const app = express();
const PORT = 3006;

//Initialize the counter
let counter = 0;

// Define Routes

// Route for getting the current countr value
app.get("/", (req, res) => {
  res.json({ counter });
});

// Route for incrementing the counter
app.get("/increment", (req, res) => {
  counter += 1;
  res.json({ counter });
});

// Route for decrementing the counter
app.get("/decrement", (req, res) => {
  counter -= 1;
  res.json({ counter });
});

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
