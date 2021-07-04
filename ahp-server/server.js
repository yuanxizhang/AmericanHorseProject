import express from 'express'
import mongoose from 'mongoose' 
import dotenv from 'dotenv'
import path from 'path'

// const dotenv = require('dotenv');
// const express = require('express');
// const path = require('path');


import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import horseRoutes from './routes/horseRoutes.js'
// import shelterRoutes from './routes/shelterRoutes.js'
// import userRoutes from './routes/userRoutes.js'
// import requestRoutes from './routes/requestRoutes.js'
// import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config();

const app = express();

// Connect to Mongo
mongoose.connect(process.env.DB,
                 {  useNewUrlParser: true, 
                    useUnifiedTopology: true, 
                    useFindAndModify: false })
    .then(() => console.log("MongoDB database connected successfully"))
    .catch(err => console.log(err));

  
  app.use(express.json())
  
  // app.use('/api/horses', horseRoutes)
  // app.use('/api/shelters', shelterRoutes)
  // app.use('/api/users', userRoutes)
  // app.use('/api/orders', orderRoutes)
  // app.use('/api/upload', uploadRoutes)
  
  const __dirname = path.resolve()
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/ahp-client/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'ahp-client', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }
  
app.use(notFound)
app.use(errorHandler)
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
