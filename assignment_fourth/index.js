const express = require("express");
const app = express();

const PORT = 4000;
const HOSTNUMBER = 'localhost';

// Define the '/random' Route
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
});

//Handle Invalid Routes
app.use((req, res) => {
    res.status(404).json({ error: "Page Not Found" });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOSTNUMBER}:${PORT}`);
})

