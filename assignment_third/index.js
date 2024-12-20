const express = require("express");
const app = express();

const PORT = 3011;
const HOSTNAME = "localhost";

//For Define Routes
app.get("/", (req, res) => {
  res.send(" <h1>I Am Homepage</h1> ");
});

app.get("/about", (req, res) => {
  res.send("<h1>I Am About Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>support@pwskills.com</h1>");
});

// For Invalid Route
app.use((req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
