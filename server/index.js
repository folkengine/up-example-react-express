const express = require("express");

const app = express();

// Put all API endpoints under '/api'
app.get("/api/test", (req, res) => {
  res.json("It works! This is a message from the server!");
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Express server is listening on port ${port}...`);
