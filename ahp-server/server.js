
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import app from './app';

// const dotenv = require('dotenv');
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

dotenv.config();

// const app = require('./app')
const PORT = process.env.PORT || 5000;

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false})
    .then(() => console.log("MongoDB Database Connected Successfully"))
    .catch(err => console.log(err));
app.use(cors());

app.get('/ping', (req, res) => {
    res.json({message: 'American Horse Project RESTful API'});
});

app.use(express.static(path.join(__dirname, 'build')));
// requests to any route would be served the index.html file in the production build
app.get('/*', function(req,res) {
          res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }); 

/**
 * Start Express server.
 */


app.listen(PORT, function() {
    console.log("Express server is running on Port: " + PORT);
});

