"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000; // Change this to the desired port number
// Define a route for the ping API
app.get('/ping', (req, res) => {
    res.send('Ok!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
