const http = require("http");

const PORT = 3002;
const HOSTNAME = "localhost";

// Dummy data
const menProducts = [
  { id: 1, name: "Men's T-Shirt", price: 350 },
  { id: 2, name: "Men's Jeans", price: 700 },
  { id: 3, name: "Men's Jacket", price: 1500 },
  { id: 4, name: "Men's Shoes", price: 1000 },
  { id: 5, name: "Men's Hat", price: 200 },
  { id: 6, name: "Men's Watch", price: 500 },
  { id: 7, name: "Men's Sunglasses", price: 400 },
  { id: 8, name: "Men's Shorts", price: 250 },
  { id: 9, name: "Men's Hoodie", price: 1200 },
  { id: 10, name: "Men's Socks", price: 100 },
];

const womenProducts = [
  { id: 1, name: "Women's Dress", price: 2000 },
  { id: 2, name: "Women's Jeans", price: 1000 },
  { id: 3, name: "Women's Skirt", price: 600 },
  { id: 4, name: "Women's Top", price: 500 },
  { id: 5, name: "Women's Shoes", price: 750 },
  { id: 6, name: "Women's Handbag", price: 500 },
  { id: 7, name: "Women's Scarf", price: 200 },
  { id: 8, name: "Women's Jacket", price: 1500 },
  { id: 9, name: "Women's Sunglasses", price: 500 },
  { id: 10, name: "Women's Earrings", price: 100 },
];

// Create Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to Men & Women Dummy Data</h1>");
  } else if (req.url === "/men") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ products: menProducts }));
  } else if (req.url === "/women") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ products: womenProducts }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1> Page Not Found!</h1>");
  }
});

server.on("error", (error) => {
  console.log("error", error);
});
// Start Server
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
