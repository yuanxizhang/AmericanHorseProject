const app = require('./app');
const express = require('express');
const cors = require('cors');
const PORT = 5000;

app.use(cors());

/**
 * Start Express server.
 */


app.listen(PORT, function() {
    console.log("Express server is running on Port: " + PORT);
});