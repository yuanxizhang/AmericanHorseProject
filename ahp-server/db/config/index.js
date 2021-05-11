const mongoose = require('mongoose'); 
const mongoDB_URL = require('../../process.env').MONGODB_URL;


try {
    mongoose.connect(mongoDB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('MongoDB has been connected!');
  } catch (error) {
    console.log(`Error: ${error}`);
  }