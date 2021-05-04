import app from "./app";
const cors = require('cors');
const PORT = 5000;

app.use(cors());

/**
 * Start Express server.
 */
const server = app.listen(PORT, function() {
    console.log("Express server is running on Port: " + PORT);
});

export default server;