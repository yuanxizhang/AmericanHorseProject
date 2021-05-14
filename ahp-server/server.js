import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const horseRoute = require('./routes/open/horse.route')

// Connect to Mongo
mongoose.connect(process.env.DB,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false})
    .then(() => console.log("MongoDB Database Connected Successfully"))
    .catch(err => console.log(err));

app.use(cors());
app.use('/horses', horseRoute)

app.get('/', (req, res) => {
    res.json({message: 'American Horse Project RESTful API'});
  });

/**
 * Start Express server.
 */
const server = app.listen(PORT, function() {
    console.log("Express server is running on Port: " + PORT);
});

export default server;